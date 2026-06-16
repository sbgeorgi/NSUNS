# AGENTS.md

## Project identity

This directory contains a standalone browser-based lifting app.

Primary app:

```txt
index.html
````

Standalone browser test runner:

```txt
test.html
```

The app is a single-file Alpine.js / Tailwind CDN app. It must remain usable by opening `index.html` directly in a browser.

There is no build step.

Do not introduce a build step.

---

## Non-negotiable constraints

Do not remove functionality.

Do not convert the app to React, Next.js, TypeScript, Vite, Webpack, npm, or any framework.

Do not break standalone browser use.

Do not require a server.

Do not require a package install.

Do not remove the existing CDN-based Alpine/Tailwind/Chart/confetti structure unless replacing something with an equivalent standalone browser-safe implementation.

Do not call real cloud sync from tests.

Do not corrupt real localStorage data from tests.

Dark mode must remain the default visual experience.

---

## Current architecture anchors

The current app includes these important structures and behaviors.

### Global/data structures

```js
DATA
DATA.schemes
DATA.progs
DATA.muscles
DATA.halfLife
DATA.groups
DATA.volumeLandmarks
DATA.supercompensation
DATA.ui
PROG
U
EX_OPTS
EX_INDEX
impact()
app()
```

### Important utility functions

```js
U.g()
U.s()
U.d()
U.rnd()
U.conv()
U.vol()
U.rm()
U.fatigue()
U.prs()
U.weeklyEffectiveSets()
```

### Important app methods

```js
init()
destroy()
getSets()
start()
computeProgression()
findTopAMRAP()
findBestCompletedSet()
_computeBestE1RMFromSets()
_recordE1RM()
_updatePR()
saveFinish()
updCache()
_computeVolumeLandmarks()
getReadinessScore()
getRecoveryAdvice()
calcPlates()
closestWeight()
save()
saveSess()
togUnit()
exportJSON()
importData()
```

When modifying calculations, preserve the semantics of these functions unless a bug is proven and covered by regression tests.

---

## Current programs and schemes

The app’s actual program/scheme definitions are the source of truth.

Current programs include:

```txt
nSuns LP
PPL
PHUL
StrongLifts 5x5
GZCLP
5/3/1 BBB
```

Current scheme groups include:

```txt
DATA.schemes.nsuns
DATA.schemes.stronglifts
DATA.schemes.phul
DATA.schemes.ppl
DATA.schemes.gzclp
DATA.schemes['531']
```

Do not replace these with generic online templates.

If changing any scheme, add a test proving the intended change and document why the old behavior was wrong.

---

## Source-of-truth hierarchy

When deciding expected behavior:

1. Existing constants and tables in `DATA`
2. Existing named program/scheme/progression code
3. Existing UI labels
4. Existing saved-data compatibility
5. Common lifting conventions only if the app has no defined behavior

The app’s current logic wins unless it is clearly inconsistent, broken, or unsafe.

---

## Required test API

Calculation code should be testable without driving the UI.

Expose a small deterministic test API from `index.html`.

Preferred name:

```js
window.__LIFT_TEST_API__
```

Recommended shape:

```js
window.__LIFT_TEST_API__ = {
  DATA,
  PROG,
  U,
  EX_OPTS,
  EX_INDEX,
  impact,
  appFactory: app,
  createTestApp,
  helpers: {
    roundWeight,
    convertWeight,
    estimateOneRepMax,
    calculateVolume,
    calculateFatigue,
    generateSets,
    calculateProgression,
    calculatePlateLoading,
    calculateRecoverySnapshot,
    calculateVolumeLandmarks,
    evaluatePR,
    resolveTheme
  }
};
```

Rules:

* Expose calculation helpers only.
* Do not expose private user data.
* Do not expose passwords, hashes, Pantry basket contents, or cloud credentials.
* Do not make production UI depend on `test.html`.
* Do not trigger login, cloud sync, timers, wake lock, audio, Chart.js, or DOM-only behavior during pure tests.

---

## Testing philosophy

`test.html` must be a real expected-value test suite.

Do not write only smoke tests.

Every important calculation must have deterministic expected values.

Every bug fix must have a regression test.

Tests must run by opening:

```txt
test.html
```

No package manager.

No terminal command required.

No build command.

---

## Test runner requirements

`test.html` must:

* display grouped test results on the page
* show pass/fail counts
* show failure name, expected value, actual value, and helpful details
* log a concise summary to console
* include a “Run tests” or “Run again” button
* use isolated test storage
* mock external/browser side effects
* be repeatable without page reload if possible

Required assertion helpers:

```js
assertEqual(actual, expected, message)
assertApprox(actual, expected, tolerance, message)
assertDeepEqual(actual, expected, message)
assertTrue(value, message)
assertFalse(value, message)
assertIncludes(value, expectedSubstring, message)
```

Required grouping:

```txt
Utilities
Workout generation
Progression
Recovery
Volume landmarks
PR / e1RM
Plate loading
Persistence
Theme / preferences
Smoke tests
```

---

## Browser/test isolation

Tests must not touch real user data.

Use one of these strategies:

1. inject fake storage into helpers, or
2. prefix test keys with `__LIFT_TEST__`, or
3. backup and restore every touched localStorage key.

Tests must mock or suppress:

```js
fetch
localStorage sync side effects
requestSync
confirm
alert
AudioContext
navigator.vibrate
navigator.wakeLock
Chart
confetti
Date.now
setInterval where needed
```

Do not let tests call real Pantry.

---

## Utility calculation expected values

### Rounding

Current behavior:

```txt
lbs default increment       = 5
lbs microplate increment    = 2.5
kg default increment        = 2.5
kg microplate increment     = 1.25
```

Expected tests:

```txt
U.rnd(102.4, 'lbs', false)  -> 100
U.rnd(102.5, 'lbs', false)  -> 105
U.rnd(107.49, 'lbs', false) -> 105
U.rnd(107.5, 'lbs', false)  -> 110

U.rnd(101.24, 'lbs', true)  -> 100
U.rnd(101.25, 'lbs', true)  -> 102.5
U.rnd(103.74, 'lbs', true)  -> 102.5
U.rnd(103.75, 'lbs', true)  -> 105

U.rnd(101.24, 'kg', false)  -> 100
U.rnd(101.25, 'kg', false)  -> 102.5
U.rnd(103.74, 'kg', false)  -> 102.5
U.rnd(103.75, 'kg', false)  -> 105

U.rnd(101.24, 'kg', true)   -> 101.25
U.rnd(101.875, 'kg', true)  -> 102.5
```

### Unit conversion

Expected approximate tests:

```txt
U.conv(45, 'lbs', 'kg')     -> 20.41164
U.conv(225, 'lbs', 'kg')    -> 102.0582
U.conv(20, 'kg', 'lbs')     -> 44.09249
U.conv(100, 'kg', 'lbs')    -> 220.4624
U.conv(225, 'lbs', 'lbs')   -> 225
```

### Estimated 1RM

Current `U.rm()` behavior is hybrid:

```txt
1 rep      -> exact weight
2-6 reps   -> Brzycki-style rounded result
7-10 reps  -> Epley-style rounded result
11-30 reps -> current exponential formula rounded result
invalid    -> 0
```

Required expected tests:

```txt
U.rm(225, 1)  -> 225
U.rm(225, 5)  -> 253
U.rm(315, 3)  -> 334
U.rm(225, 8)  -> 285
U.rm(100, 10) -> 133
U.rm(100, 12) -> 141
U.rm(100, 30) -> 184
U.rm(0, 5)    -> 0
U.rm(225, 0)  -> 0
```

### Volume

Current `U.vol()` counts only completed sets and uses `performed` reps when present.

Fixture:

```js
[
  { weight: 225, reps: 5, completed: true },
  { weight: 225, reps: 5, completed: false },
  { weight: 185, reps: 5, performed: 8, completed: true }
]
```

Expected:

```txt
2605
```

### Fatigue

Use approximate assertions.

Expected:

```txt
U.fatigue(225, 5, 225, false, 7) -> 10
U.fatigue(225, 5, 225, true, 7)  -> 16
U.fatigue(170, 8, 225, false, 8) -> approximately 10.2433
```

---

## Workout generation tests

Use fixture training maxes:

```js
const fixtureTMs = {
  Bench: 225,
  Squat: 315,
  Deadlift: 405,
  OHP: 135,
  Row: 185
};
```

Default fixture preferences:

```js
{
  weightUnit: 'lbs',
  microplates: false,
  program: 'nsuns',
  barWeight: 45
}
```

Every `DATA.progs` day must be covered.

Every `DATA.schemes` key must be covered.

Minimum expected snapshots using Bench TM 225 lb:

```txt
nSuns vol:
145x8, 170x6, 190x4, 190x4, 190x4, 180x5, 170x6, 160x7, 145x8+

nSuns heavy:
170x5, 190x3, 215x1+, 205x3, 190x3, 180x3, 170x5, 160x5, 145x5+

nSuns dl:
170x5, 190x3, 215x1+, 205x3, 190x3, 180x3, 170x3, 160x3, 145x3

nSuns t2:
115x5, 135x6, 160x7, 160x4, 160x4, 160x4, 160x4, 160x4

PPL m5:
190x5, 190x5, 190x5, 190x5, 190x5+

PPL m1:
205x5+

PHUL pow:
190x5, 190x5, 190x5

PHUL hyp:
145x10, 145x10, 145x10

GZCLP t1 stage 1:
190x3, 190x3, 190x3, 190x3, 190x3+

5/3/1 week 1:
145x5, 170x5, 190x5+

5/3/1 week 2:
160x3, 180x3, 205x3+

5/3/1 week 3:
170x5, 190x3, 215x1+

5/3/1 deload:
90x5, 115x5, 135x5

5/3/1 BBB:
115x10 repeated 5 times

StrongLifts std:
225x5, 225x5, 225x5, 225x5, 225x5+
```

Also test:

* kg generation
* microplate generation
* exercise variant multiplier
* T2 swap/selected exercise multiplier
* 5/3/1 cycle week selection
* GZCLP stage scheme selection
* StrongLifts scheme selection

---

## Progression test requirements

Test `PROG` and `computeProgression()`.

### nSuns

Required branches:

```txt
T2 all complete and no failures -> +half step
T2 incomplete -> hold
T2 failed -> hold
T1 no AMRAP -> hold
T1 AMRAP target >= 5, actual target - 3 or worse -> decrease
T1 AMRAP target >= 5, actual = target -> hold
T1 AMRAP target >= 5, actual = target + 1 -> half step
T1 AMRAP target >= 5, actual = target + 3 -> full step
T1 AMRAP target < 5, actual <= 1 -> hold
T1 AMRAP target < 5, actual 2-3 -> +1 step
T1 AMRAP target < 5, actual 4-5 -> +2 steps
T1 AMRAP target < 5, actual > 5 -> +3 steps
```

For lbs:

```txt
step = 5
half step = 2.5
```

For kg:

```txt
step = 2.5
half step = 1.25
```

### Linear / PHUL / PPL

Required branches:

```txt
T1 missed AMRAP -> hold
T1 AMRAP delta 0-2 -> +step
T1 AMRAP delta >2 -> +2 steps
T2 all complete -> +step
T2 incomplete -> hold
```

### 5/3/1

Required branches:

```txt
T2 -> no change
cycle week 1/2/3 -> in-cycle no change
cycle week 4 upper lift complete -> +5 lb
cycle week 4 lower lift complete -> +10 lb
cycle week 4 upper kg complete -> +2.5 kg
cycle week 4 lower kg complete -> +5 kg
cycle week 4 failed with fewer than 2 recent failures -> hold
cycle week 4 failed with 2+ recent failures -> -10%
```

### GZCLP

Required branches:

```txt
T1 stage 1 pass -> +step
T1 stage 1 fail -> stage 2, +0
T1 stage 2 fail -> stage 3, +0
T1 stage 3 fail -> reset stage 1, -15%
T2 stage 1 pass -> +step
T2 stage 1 fail -> stage 2, +0
T2 stage 2 fail -> stage 3, +0
T2 stage 3 fail -> reset stage 1, -15%
```

### StrongLifts

Required branches:

```txt
all complete Squat/Bench/OHP/Row -> +5 lb
all complete Deadlift -> +10 lb
all complete kg non-deadlift -> +2.5 kg
all complete kg Deadlift -> +5 kg
first failure -> retry
second failure -> retry
third consecutive failure -> -10%
repeated deload scheme transition std -> 3x5 -> 3x3 -> 1x3
deadlift scheme transition dl -> 3x5
```

---

## Plate loading tests

Use current greedy plate loading.

### lbs, bar 45

```txt
95  -> [25]
115 -> [35]
135 -> [45]
185 -> [45, 25]
225 -> [45, 45]
245 -> [45, 45, 10]
315 -> [45, 45, 45]
```

### kg, bar 20

```txt
60  -> [20]
100 -> [20, 20]
140 -> [25, 25, 10]
180 -> [25, 25, 25, 5]
```

Also test:

```txt
weight <= bar -> []
unknown/invalid weight -> safe empty result or safe fallback
```

---

## PR / PB / e1RM tests

Current PR logic stores best estimated 1RM by lift.

Required tests:

```txt
No existing PR + 225x5 Bench -> PR true, stored 253
Existing Bench PR 253 + 225x5 -> PR false
Existing Bench PR 253 + 225x6 -> PR true
Failed set does not count
Incomplete set does not count
Best set by e1RM is chosen, not just heaviest set
e1rmHistory caps at 20 entries
Variant raw e1RM is recorded under variant name
Variant normalized e1RM is recorded under base lift
```

Variant normalization example:

```txt
Incline Bench multiplier = 0.85
raw e1RM = 200
normalized base e1RM = round(200 / 0.85) = 235
```

Tie policy:

```txt
Equal e1RM is not a new PR
Only strictly greater e1RM is a new PR
```

---

## Recovery module tests

The app’s recovery model uses:

```txt
completed sets
exercise muscle impact
U.fatigue()
muscle half-life decay
program capacity scaling
base recovery capacity
CNS modifier
supercompensation windows
volume landmarks
```

Tests must freeze time or inject `now`.

Required scenarios:

### Empty history

Expected:

```txt
getReadinessScore() -> 100
recovery advice -> null
recovery map values are safe defaults
```

### Recent heavy fatigue

Create a completed heavy Deadlift or Squat history item.

Expected:

```txt
affected muscles recover less than untouched muscles
CNS decreases
lowBack decreases for Deadlift
Legs group reflects Squat/Deadlift fatigue
```

### Decay

Same session at:

```txt
0 hours
48 hours
120 hours
```

Expected:

```txt
recovery increases over time
fatigue contribution decays according to half-life
```

### CNS warning

When CNS recovery is under 40:

```txt
getRecoveryAdvice().cnsWarning -> true
suggestion includes CNS warning
```

### Target muscle warning

When current session’s target muscles are under 50:

```txt
advice contains fatigued muscles
suggestion recommends reduced volume
```

### Supercompensation

At configured peak windows:

```txt
recovery can exceed 100
recovery is capped at 110
group status can become Primed
```

### Group statuses

Test status boundaries:

```txt
Primed
Ready
Recovering
Fatigued
```

---

## Volume landmark tests

Current landmarks use:

```js
DATA.volumeLandmarks[muscle] = { mev, mav, mrv }
```

Required statuses:

```txt
weekSets < mev              -> below_mev
mev <= weekSets <= mav      -> optimal
mav < weekSets <= mrv       -> above_mav
weekSets > mrv              -> above_mrv
```

Warning behavior:

```txt
above_mrv -> warning
below_mev with sets > 0 -> warning
below_mev with 0 sets -> no warning
```

---

## Deload tests

Required tests:

```txt
14+ days off -> 10% deload suggestion
28+ days off -> 20% deload suggestion
42+ days off -> 25% deload suggestion
3 consecutive missed AMRAPs on a lift -> performance deload
readiness < 45 and last 3 RPE >= 8.5 -> fatigue deload
declining e1RM on >= 60% tracked lifts -> fatigue deload
doDeload reduces TMs by selected percentage and rounds using current unit/microplate setting
```

---

## Theme / light mode requirements

A theme feature is allowed and encouraged.

Add preference:

```js
prefs.theme = 'dark'
```

Supported values:

```txt
dark
light
system
```

Required behavior:

```txt
dark -> force dark theme
light -> force light theme
system -> use prefers-color-scheme
```

Implementation guidance:

* Use root classes such as `.theme-dark` and `.theme-light`.
* Prefer CSS variables for semantic colors.
* Preserve current dark look as default.
* Add Settings UI for theme selection.
* Persist through `lift_preferences`.
* Update `meta[name="theme-color"]`.
* Listen to `prefers-color-scheme` changes when theme is `system`.
* Ensure Chart.js colors remain readable in both themes.
* Ensure modals, nav, inputs, cards, dropdowns, toasts, calendar, recovery cards, and history cards remain readable.
* Do not break reduce-motion behavior.

Required tests:

```txt
default theme -> dark
saved theme light -> light
saved theme dark -> dark
saved theme system + mock dark media -> dark
saved theme system + mock light media -> light
theme survives save/load
invalid saved theme -> dark
```

---

## Menu/preferences improvement rules

Allowed improvements:

* group preferences by category
* add theme selection
* add clearer labels/descriptions
* improve import/export/reset safety
* improve empty states
* improve recovery explanations
* improve PR display clarity
* improve chart readability
* improve accessibility/focus states

Do not remove existing settings:

```txt
timerSound
vibration
autoStartTimer
showPreviousWorkout
autoDeload
keepAwake
reduceMotion
showETR
heatmapCalendar
smartRest
swipeToComplete
warmupSteps
weightUnit
barWeight
microplates
program
restT1
restT2
restT3
```

---

## Persistence requirements

Current persistence uses localStorage.

Important keys include:

```txt
lift_user
nsuns_ultimate
lift_preferences
lift_bodyweight
lift_achievements
lift_prs
lift_e1rm_history
lift_templates
lift_exercise_notes
lift_tonnage_goal
lift_rest_history
lift_xp
lift_active_session
lift_active_session_backup
lift_last_sync
```

Rules:

* Preserve existing keys.
* Preserve old saved data compatibility.
* Merge missing preference fields with defaults.
* Do not discard old user data.
* If adding `prefs.theme`, old preference blobs without `theme` must load safely.
* Corrupt JSON must not crash the app.
* Export/import must include new fields where appropriate.
* Tests must isolate storage.

---

## Cloud sync rules

The app uses Pantry sync.

Do not change cloud sync semantics casually.

Do not expose Pantry details in UI beyond existing behavior.

Do not call real Pantry from tests.

If sync is modified:

* preserve login/register behavior
* preserve basket naming behavior
* preserve offline-first behavior
* handle fetch failures safely
* add tests using mocked `fetch`

---

## Accessibility and mobile rules

Preserve mobile-first behavior.

Do not break:

```txt
safe-area padding
bottom nav
modals
sticky headers
swipe-to-complete rows
workout view
calendar/history view
settings view
```

Improvements should include where practical:

```txt
aria labels
button labels
focus states
reduced motion support
readable contrast
tap targets
keyboard escape behavior
```

---

## Final response requirements

When finished, report:

1. Files changed
2. Calculation audit summary
3. Tests added by category
4. Bugs fixed
5. UI/theme/menu improvements
6. Existing functionality preserved
7. How to run tests
8. Known limitations

Do not claim tests pass unless verified.

---

## Definition of done

The task is complete only when:

* `index.html` opens directly and works.
* `test.html` opens directly and runs the suite.
* No existing user-facing module is removed.
* Workout generation is tested.
* Every program/progression branch is tested.
* Recovery/readiness is tested.
* Volume landmarks are tested.
* PR/e1RM logic is tested.
* Plate loading is tested.
* Persistence is tested.
* Theme preference is tested.
* Existing dark mode remains visually intact.
* Light mode is readable and complete.
* Tests do not touch real user data or real Pantry sync.

```
```
