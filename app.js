
        const PANTRY_ID = '8f01b867-0669-4964-9042-792b6c8ebcd6';
        const DATA_VERSION = 4;

        window.requestSync = () => { if (window.__app && window.__app.triggerSync) window.__app.triggerSync(); };

        const ICONS = { warn: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z', x: 'M6 18L18 6M6 6l12 12', check: 'M5 13l4 4L19 7', trash: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16', edit: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z', save: 'M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4', play: 'M8 5v14l11-7z', prev: 'M15 19l-7-7 7-7', next: 'M9 5l7 7-7 7', warn2: 'M12 8v4m0 4h.01', info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', train: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', hist: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', set: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', chev_down: 'M19 9l-7 7-7-7', swap: 'M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4', expand: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4', search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', trophy: 'M12 15l-2 5h4l-2-5zm0 0a7 7 0 01-7-7V4h14v4a7 7 0 01-7 7zM5 4H3v2a3 3 0 003 3m10-5h2v2a3 3 0 01-3 3', target: 'M12 2a10 10 0 110 20 10 10 0 010-20zm0 4a6 6 0 100 12 6 6 0 000-12zm0 4a2 2 0 110 4 2 2 0 010-4z', clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', trendUp: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', trendDown: 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6', copy: 'M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3', bookmark: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z', zap: 'M13 10V3L4 14h7v7l9-11h-7z', bar_chart: 'M9 19V13a1 1 0 00-1-1H5a1 1 0 00-1 1v6m6 0H4m6 0h4m0 0V9a1 1 0 00-1-1h-3a1 1 0 00-1 1v10m6 0V7a1 1 0 00-1-1h-3a1 1 0 00-1 1v12m6 0h-4m4 0h1a1 1 0 001-1V11a1 1 0 00-1-1h-3a1 1 0 00-1 1v8', note: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', undo: 'M3 10h10a5 5 0 015 5v2M3 10l4-4m-4 4l4 4', zap_filled: 'M13 10V3L4 14h7v7l9-11h-7z', cloud: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' };
        const DATA = {
            // `cns` is a conservative systemic-fatigue proxy, not a literal nervous-system measurement.
            muscles: { Bench: { chest: 1, upperChest: .4, frontDelt: .7, tri: .7, lats: .15, cns: .2 }, OHP: { frontDelt: 1, tri: .6, upperChest: .4, traps: .3, abs: .3, lowBack: .2, cns: .25 }, Squat: { quads: 1, glutes: .8, lowBack: .65, hams: .3, abs: .4, calves: .12, cns: .55 }, Deadlift: { glutes: 1, hams: .85, lowBack: 1, traps: .7, lats: .5, quads: .4, grip: .8, cns: .7 }, Row: { lats: 1, bi: .7, rearDelt: .7, grip: .6, lowBack: .4, traps: .4, cns: .2 } },
            halfLife: { chest: 36, upperChest: 36, frontDelt: 28, rearDelt: 24, tri: 28, bi: 28, lats: 36, traps: 30, quads: 48, hams: 44, glutes: 44, calves: 36, lowBack: 48, cns: 36, abs: 24, grip: 24, forearm: 24 },
            groups: { Push: ['chest', 'frontDelt', 'tri', 'upperChest'], Pull: ['lats', 'bi', 'rearDelt', 'traps'], Legs: ['quads', 'hams', 'glutes', 'calves'], Core: ['lowBack', 'abs'], CNS: ['cns'] },
            isolationDominant: new Set(['calves', 'forearm', 'grip', 'abs', 'bi', 'tri', 'rearDelt']),
            baseRecoveryCapacity: { chest: 90, upperChest: 90, frontDelt: 75, rearDelt: 60, tri: 80, bi: 80, lats: 100, traps: 90, quads: 120, hams: 110, glutes: 125, calves: 100, lowBack: 110, cns: 160, abs: 100, grip: 100, forearm: 100 },
            programCapacityScale: { nsuns: 1.3, ppl: 1.25, phul: 1.15, stronglifts: 1, gzclp: 1.1, '531': 1.1 },
            restGuidelines: {
                maxEffort: 240,
                heavyCompound: 180,
                hypertrophyCompound: 120,
                accessory: 60,
                failureBonus: 60,
                maxTimer: 300
            },
            compoundAccessories: new Set(['Row', 'Pendlay Row', 'DB Row', 'Cable Row', 'T-Bar Row', 'Seal Row', 'Chest Supported Row', 'Meadows Row', 'Pullups', 'Chin-ups', 'Lat Pulldown', 'LatPD', 'Neutral Pullups', 'Chins', 'Wide Grip Pulldown', 'Close Grip Pulldown', 'Dips', 'Close Grip BP', 'Leg Press', 'Lunges', 'Bulgarian Split', 'Hip Thrust', 'Hack Squat', 'Nordic Curl', 'Good Morning', 'OHP', 'Seated OHP', 'DB OHP', 'Push Press', 'DL', 'Romanian DL', 'SLDL']),
            accessoryMuscleImpact: { 'DB Row': { lats: .85, bi: .6, rearDelt: .5, grip: .4, lowBack: .15, traps: .3 }, 'Cable Row': { lats: .8, bi: .5, rearDelt: .5, traps: .4, grip: .3 }, 'T-Bar Row': { lats: .9, bi: .6, rearDelt: .5, traps: .5, grip: .6, lowBack: .4 }, 'Seal Row': { lats: .9, bi: .5, rearDelt: .6, traps: .3 }, 'Chest Supported Row': { lats: .85, bi: .5, rearDelt: .6, traps: .3 }, 'Meadows Row': { lats: .7, bi: .4, rearDelt: .5, traps: .3, grip: .5 }, 'Pendlay Row': { lats: .95, bi: .6, rearDelt: .6, traps: .5, grip: .6, lowBack: .5 }, 'Incline Bench': { upperChest: .9, chest: .6, frontDelt: .6, tri: .6 }, 'Close Grip Bench': { tri: .9, chest: .7, frontDelt: .5 }, 'Close Grip BP': { tri: .9, chest: .65, frontDelt: .45 }, 'DB Bench': { chest: .9, upperChest: .4, frontDelt: .5, tri: .5 }, 'Front Squat': { quads: 1, glutes: .5, abs: .6, lowBack: .3, cns: .6 }, Legs: { quads: .75, glutes: .6, hams: .45, calves: .2, cns: .15 }, 'Romanian DL': { hams: 1, glutes: .7, lowBack: .7, grip: .5 }, SLDL: { hams: 1, glutes: .7, lowBack: .7, grip: .5 }, 'Sumo DL': { glutes: 1, hams: .7, lowBack: .7, quads: .6, grip: .8, cns: .9 }, 'Trap Bar DL': { quads: .6, glutes: .8, hams: .7, lowBack: .6, traps: .5, grip: .7, cns: .7 } },
            _accessoryImpactLower: null,
            getAccessoryImpact(id) {
                if (!this._accessoryImpactLower) {
                    this._accessoryImpactLower = {};
                    Object.entries(this.accessoryMuscleImpact).forEach(([k, v]) => { this._accessoryImpactLower[k.toLowerCase()] = v });
                }
                return this._accessoryImpactLower[(id || '').toLowerCase()] || this.accessoryMuscleImpact[id] || null;
            },
            volumeLandmarks: {
                chest: { mev: 8, mav: 16, mrv: 22 },
                upperChest: { mev: 4, mav: 10, mrv: 16 },
                frontDelt: { mev: 6, mav: 12, mrv: 18 },
                rearDelt: { mev: 6, mav: 14, mrv: 22 },
                tri: { mev: 4, mav: 10, mrv: 18 },
                bi: { mev: 4, mav: 12, mrv: 20 },
                lats: { mev: 8, mav: 16, mrv: 22 },
                traps: { mev: 4, mav: 10, mrv: 18 },
                quads: { mev: 8, mav: 16, mrv: 22 },
                hams: { mev: 6, mav: 12, mrv: 18 },
                glutes: { mev: 4, mav: 12, mrv: 18 },
                calves: { mev: 6, mav: 12, mrv: 20 },
                lowBack: { mev: 4, mav: 10, mrv: 14 },
                abs: { mev: 4, mav: 12, mrv: 22 },
                cns: { mev: 2, mav: 8, mrv: 14 },
                grip: { mev: 4, mav: 10, mrv: 18 },
                forearm: { mev: 4, mav: 10, mrv: 18 }
            },
            supercompensation: {
                chest: { peakHours: 72, windowHours: 24 },
                upperChest: { peakHours: 72, windowHours: 24 },
                frontDelt: { peakHours: 56, windowHours: 20 },
                rearDelt: { peakHours: 48, windowHours: 18 },
                tri: { peakHours: 56, windowHours: 20 },
                bi: { peakHours: 56, windowHours: 20 },
                lats: { peakHours: 72, windowHours: 24 },
                traps: { peakHours: 60, windowHours: 22 },
                quads: { peakHours: 96, windowHours: 30 },
                hams: { peakHours: 88, windowHours: 28 },
                glutes: { peakHours: 88, windowHours: 28 },
                calves: { peakHours: 72, windowHours: 24 },
                lowBack: { peakHours: 96, windowHours: 30 },
                cns: { peakHours: 120, windowHours: 36 },
                abs: { peakHours: 48, windowHours: 18 },
                grip: { peakHours: 48, windowHours: 18 },
                forearm: { peakHours: 48, windowHours: 18 }
            },
            schemes: {
                nsuns: { vol: [[.65, 8], [.75, 6], [.85, 4], [.85, 4], [.85, 4], [.8, 5], [.75, 6], [.7, 7], [.65, 8, '+']], heavy: [[.75, 5], [.85, 3], [.95, 1, '+'], [.9, 3], [.85, 3], [.8, 3], [.75, 5], [.7, 5], [.65, 5, '+']], dl: [[.75, 5], [.85, 3], [.95, 1, '+'], [.9, 3], [.85, 3], [.8, 3], [.75, 3], [.7, 3], [.65, 3]], t2: [[.5, 5], [.6, 6], [.7, 7], [.7, 4], [.7, 4], [.7, 4], [.7, 4], [.7, 4]] },
                stronglifts: { std: [[1, 5], [1, 5], [1, 5], [1, 5], [1, 5, '+']], dl: [[1, 5, '+']], '3x5': [[1, 5], [1, 5], [1, 5, '+']], '3x3': [[1, 3], [1, 3], [1, 3, '+']], '1x3': [[1, 3, '+']] },
                phul: { pow: [[.85, 5], [.85, 5], [.85, 5]], hyp: [[.65, 10], [.65, 10], [.65, 10]], vol: [[.6, 12], [.6, 12], [.6, 12]] },
                ppl: { m5: [[.85, 5], [.85, 5], [.85, 5], [.85, 5], [.85, 5, '+']], m1: [[.9, 5, '+']], sec: [[.7, 10], [.7, 10], [.7, 10]] },
                gzclp: { t1: [[.85, 3], [.85, 3], [.85, 3], [.85, 3], [.85, 3, '+']], t2: [[.65, 10], [.65, 10], [.65, 10]], t1_s2: [[.85, 2], [.85, 2], [.85, 2], [.85, 2], [.85, 2], [.85, 2, '+']], t1_s3: [[.85, 1], [.85, 1], [.85, 1], [.85, 1], [.85, 1], [.85, 1], [.85, 1], [.85, 1], [.85, 1], [.85, 1, '+']], t2_s2: [[.65, 8], [.65, 8], [.65, 8]], t2_s3: [[.65, 6], [.65, 6], [.65, 6]], f1: [[5, 3], [6, 2], [10, 1]], f2: [[3, 10], [3, 8], [3, 6]] },
                '531': { w1: [[.65, 5], [.75, 5], [.85, 5, '+']], w2: [[.7, 3], [.8, 3], [.9, 3, '+']], w3: [[.75, 5], [.85, 3], [.95, 1, '+']], del: [[.4, 5], [.5, 5], [.6, 5]], bbb: Array(5).fill([.5, 10]) }
            },
            progs: {
                nsuns: { name: 'nSuns LP', daysPerWeek: 5, progressionDesc: 'Linear + AMRAP', desc: "A high-volume linear progression program inspired by Jim Wendler's 5/3/1.", days: [{ t: 'Bench Vol', t1: 'Bench', t2: 'OHP', s: 'vol', t2s: 't2', acc: [{ name: 'Row', sets: 4, reps: '10-12' }] }, { t: 'Squat Heavy', t1: 'Squat', t2: 'Deadlift', s: 'heavy', t2s: 't2', acc: [{ name: 'Legs', sets: 4, reps: '10-12' }] }, { t: 'OHP Heavy', t1: 'OHP', t2: 'Bench', s: 'heavy', t2s: 't2', acc: [{ name: 'Pullups', sets: 4, reps: 'AMRAP' }] }, { t: 'Deadlift Heavy', t1: 'Deadlift', t2: 'Squat', s: 'dl', t2s: 't2', acc: [{ name: 'Abs', sets: 4, reps: '10-15' }] }, { t: 'Bench Heavy', t1: 'Bench', t2: 'Bench', s: 'heavy', t2s: 't2', acc: [{ name: 'Arms', sets: 4, reps: '10-15' }] }] },
                ppl: { name: 'PPL', prog: 'amrap_linear', daysPerWeek: 6, progressionDesc: 'Linear + AMRAP', desc: "Push/Pull/Legs split. 6 days a week frequency.", days: [{ t: 'Push A', t1: 'Bench', t2: 'OHP', s: 'm5', t2s: 'sec', acc: [{ name: 'Tri', sets: 3, reps: '10-15' }] }, { t: 'Pull A', t1: 'Deadlift', t2: 'Row', s: 'm1', t2s: 'sec', acc: [{ name: 'Bi', sets: 3, reps: '10-15' }] }, { t: 'Legs A', t1: 'Squat', t2: 'Leg Press', s: 'm5', t2s: 'sec', acc: [{ name: 'Legs', sets: 3, reps: '10-15' }] }, { t: 'Push B', t1: 'OHP', t2: 'Bench', s: 'm5', t2s: 'sec', acc: [{ name: 'Tri', sets: 3, reps: '10-15' }] }, { t: 'Pull B', t1: 'Row', t2: 'Lat Pulldown', s: 'm5', t2s: 'sec', acc: [{ name: 'Bi', sets: 3, reps: '10-15' }] }, { t: 'Legs B', t1: 'Squat', t2: 'Romanian DL', s: 'm5', t2s: 'sec', acc: [{ name: 'Legs', sets: 3, reps: '10-15' }] }] },
                phul: { name: 'PHUL', prog: 'lin', daysPerWeek: 4, progressionDesc: 'Linear', desc: "Power Hypertrophy Upper Lower.", days: [{ t: 'Up Pwr', t1: 'Bench', t2: 'Row', s: 'pow', t2s: 'pow', acc: [{ name: 'OHP', sets: 3, reps: '6-10' }] }, { t: 'Lo Pwr', t1: 'Squat', t2: 'Deadlift', s: 'pow', t2s: 'pow', acc: [{ name: 'Legs', sets: 3, reps: '8-12' }] }, { t: 'Up Hyp', t1: 'OHP', t2: 'Bench', s: 'hyp', t2s: 'hyp', acc: [{ name: 'Row', sets: 3, reps: '10-12' }] }, { t: 'Lo Hyp', t1: 'Deadlift', t2: 'Squat', s: 'hyp', t2s: 'hyp', acc: [{ name: 'Legs', sets: 3, reps: '10-15' }] }] },
                stronglifts: { name: 'SL 5x5', prog: 'sl', pW: true, daysPerWeek: 3, progressionDesc: 'Linear + Deload', desc: "The classic 5x5 beginner program.", days: [{ t: 'A', t1: 'Squat', t2: 'Bench', s: 'std', t2s: 'std', acc: [{ name: 'Row', sets: 5, reps: '5' }] }, { t: 'B', t1: 'Squat', t2: 'OHP', s: 'std', t2s: 'std', acc: [{ name: 'DL', sets: 1, reps: '5+' }] }] },
                gzclp: { name: 'GZCLP', prog: 'gz', daysPerWeek: 4, progressionDesc: 'Stage Failure', desc: "A flexible linear progression program using the Tier system.", days: [{ t: 'D1', t1: 'Squat', t2: 'Bench', s: 't1', t2s: 't2', acc: [{ name: 'LatPD', sets: 3, reps: '10-12' }] }, { t: 'D2', t1: 'OHP', t2: 'Deadlift', s: 't1', t2s: 't2', acc: [{ name: 'Row', sets: 3, reps: '10-12' }] }, { t: 'D3', t1: 'Bench', t2: 'Squat', s: 't1', t2s: 't2', acc: [{ name: 'Tri', sets: 3, reps: '10-15' }] }, { t: 'D4', t1: 'Deadlift', t2: 'OHP', s: 't1', t2s: 't2', acc: [{ name: 'Bi', sets: 3, reps: '10-15' }] }] },
                '531': { name: '5/3/1 BBB', prog: '531', daysPerWeek: 4, progressionDesc: 'Monthly Wave', desc: "Jim Wendler's Boring But Big.", days: [{ t: 'OHP', t1: 'OHP', t2: 'OHP', s: '531', t2s: 'bbb', acc: [{ name: 'Chins', sets: 5, reps: 'AMRAP' }] }, { t: 'DL', t1: 'Deadlift', t2: 'Deadlift', s: '531', t2s: 'bbb', acc: [{ name: 'Abs', sets: 5, reps: '10-15' }] }, { t: 'Bench', t1: 'Bench', t2: 'Bench', s: '531', t2s: 'bbb', acc: [{ name: 'Row', sets: 5, reps: '10-12' }] }, { t: 'Squat', t1: 'Squat', t2: 'Squat', s: '531', t2s: 'bbb', acc: [{ name: 'Legs', sets: 5, reps: '10-15' }] }] }
            },
            ui: {
                bars: [{ weight: 45, name: 'Standard' }, { weight: 35, name: 'Womens' }, { weight: 20, name: 'Kg Std' }, { weight: 15, name: 'Kg Wm' }],
                timers: [{ l: 'Main (T1)', k: 'restT1', m: 300 }, { l: 'Secondary (T2)', k: 'restT2', m: 180 }, { l: 'Accessory (T3)', k: 'restT3', m: 120 }],
                opts: [{ k: 'timerSound', l: 'Timer Sound' }, { k: 'vibration', l: 'Vibration' }, { k: 'autoStartTimer', l: 'Auto-start Timer' }, { k: 'showPreviousWorkout', l: 'Show Previous Workout' }, { k: 'autoDeload', l: 'Auto-suggest Deload' }, { k: 'keepAwake', l: 'Keep Screen Awake' }, { k: 'reduceMotion', l: 'Reduce Motion' }, { k: 'showETR', l: 'Show Est. Time Remaining' }, { k: 'heatmapCalendar', l: 'Heatmap Calendar' }, { k: 'smartRest', l: 'Smart Rest' }, { k: 'swipeToComplete', l: 'Swipe to Complete Sets' }],
                nav: [{ id: 'dashboard', l: 'Train', i: ICONS.train }, { id: 'records', l: 'PRs', i: ICONS.trophy }, { id: 'calendar', l: 'History', i: ICONS.hist }, { id: 'preferences', l: 'Settings', i: ICONS.set }],
                plates: { kg: [25, 20, 15, 10, 5, 2.5, 1.25], lbs: [45, 35, 25, 10, 5, 2.5] },
                colors: { 55: 'bg-red-700 text-white', 45: 'bg-blue-600 text-white', 35: 'bg-yellow-500 text-black', 25: 'bg-green-500 text-black', 20: 'bg-blue-600 text-white', 15: 'bg-yellow-500 text-black', 10: 'bg-white text-black', 5: 'bg-white text-black', 2.5: 'bg-red-400 text-white', 1.25: 'bg-gray-400 text-black' }
            }
        };

        const DEFAULT_PREFS = {
            weightUnit: 'lbs',
            program: 'nsuns',
            restT1: 180,
            restT2: 120,
            restT3: 60,
            timerSound: true,
            vibration: true,
            autoStartTimer: true,
            showPreviousWorkout: true,
            autoDeload: true,
            barWeight: 45,
            microplates: false,
            keepAwake: false,
            reduceMotion: false,
            showETR: true,
            heatmapCalendar: true,
            smartRest: true,
            swipeToComplete: true,
            warmupSteps: [40, 55, 75],
            theme: 'dark'
        };
        const THEME_VALUES = ['dark', 'light', 'system'];
        const PROGRAM_ALIASES = {
            nsuns: 'nsuns', nsunslp: 'nsuns',
            ppl: 'ppl', pushpulllegs: 'ppl',
            phul: 'phul',
            stronglifts: 'stronglifts', stronglifts5x5: 'stronglifts', sl5x5: 'stronglifts',
            gzclp: 'gzclp',
            '531': '531', '531bbb': '531', wendler531: '531', wendler531bbb: '531'
        };
        const normalizeProgramKey = value => {
            const raw = String(value || '').trim();
            if (DATA.progs[raw]) return raw;
            const compact = raw.toLowerCase().replace(/[^a-z0-9]/g, '');
            return PROGRAM_ALIASES[compact] || 'nsuns';
        };
        const normalizeTheme = t => THEME_VALUES.includes(t) ? t : 'dark';
        const resolveTheme = (theme = 'dark', prefersDark = false) => {
            const pref = normalizeTheme(theme);
            return pref === 'system' ? (prefersDark ? 'dark' : 'light') : pref;
        };
        const mergePrefs = prefs => ({ ...DEFAULT_PREFS, ...(prefs && typeof prefs === 'object' ? prefs : {}), program: normalizeProgramKey(prefs?.program), theme: normalizeTheme(prefs?.theme) });
        const applyThemePreference = (theme, mediaMatches = null) => {
            const pref = normalizeTheme(theme);
            const prefersDark = mediaMatches ?? !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
            const resolved = resolveTheme(pref, prefersDark);
            document.documentElement.classList.toggle('theme-dark', resolved === 'dark');
            document.documentElement.classList.toggle('theme-light', resolved === 'light');
            document.documentElement.dataset.themePreference = pref;
            document.querySelector('meta[name="theme-color"]')?.setAttribute('content', resolved === 'dark' ? '#000000' : '#f6f7fb');
            return resolved;
        };

        const U = {
            g: (k, d) => { try { const v = LS.getItem(k); return v !== null ? (J.parse(v) ?? d) : d; } catch { return d; } },
            s: (k, v) => { try { LS.setItem(k, J.stringify(v)); if (k !== 'lift_last_sync' && k !== 'lift_user' && window.requestSync) window.requestSync(); } catch(e) { console.warn('Storage error', e); } },
            d: k => LS.removeItem(k),
            now: () => D.now(), iso: t => new D(t).toISOString().split('T')[0],
            fmt: s => (s < 0 ? '-' : '') + M.floor(M.abs(s) / 60) + ':' + String(M.floor(M.abs(s) % 60)).padStart(2, '0'),
            rnd: (n, u, m) => { if (!Number.isFinite(n)) return 0; return m ? (u === 'kg' ? M.round(n / 1.25) * 1.25 : M.round(n / 2.5) * 2.5) : (u === 'kg' ? M.round(n / 2.5) * 2.5 : M.round(n / 5) * 5) },
            safe: (v, d = 0) => Number.isFinite(+v) ? +v : d, conv: (w, f, t) => f === t ? +w : f === 'lbs' ? +w * 0.453592 : +w / 0.453592,
            vol: s => (s || []).reduce((a, x) => x.completed ? a + (x.weight * (x.performed != null ? x.performed : x.reps)) : a, 0),
            sum: (a, k) => a.reduce((s, x) => s + (k ? (x[k] || 0) : x), 0), avg: a => a.length ? U.sum(a) / a.length : 0,
            rm: (w, r) => {
                if (r <= 0 || w <= 0) return 0;
                if (r === 1) return w;
                const c = M.min(r, 30);
                if (c <= 6) {
                    return M.round(w * (36 / (37 - c))) || 0;
                } else if (c <= 10) {
                    return M.round(w * (1 + c / 30)) || 0;
                } else {
                    return M.round(w * (100 / (48.8 + 53.8 * M.exp(-0.075 * c)))) || 0;
                }
            },
            fatigue: (w, r, tm, fail, rpe) => {
                if (w <= 0 || r <= 0) return 0;
                const i = tm > 0 ? M.min(w / tm, 1.25) : .75;
                const rf = r * (1 + .02 * M.max(0, r - 8));
                return rf * M.pow(i, 1.3) * (1 + i) * (fail ? 1.6 : 1) * M.pow(1.05, (typeof rpe === 'number' ? rpe : 7) - 7);
            },
            prs: r => { const s = String(r || '10'); return /amrap/i.test(s) ? 8 : s.split('-').length === 2 ? M.round((+s.split('-')[0] + +s.split('-')[1]) / 2) : +s || 10 },
            weeklyEffectiveSets: (history, muscle, nowTs) => {
                const weekAgo = nowTs - 7 * 864e5;
                let sets = 0;
                const recent = (history || []).filter(w => {
                    const ts = historyTimestamp(w);
                    return ts >= weekAgo && ts <= nowTs;
                });
                for (let i = recent.length - 1; i >= 0; i--) {
                    const w = recent[i];
                    const countSets = (name, sArr) => {
                        if (!name || !Array.isArray(sArr)) return 0;
                        const imp = impact(name);
                        const contribution = imp[muscle] || 0;
                        if (contribution < 0.3) return 0;
                        return sArr.filter(s => s.completed && !s.failed).length * contribution;
                    };
                    sets += countSets(w.details?.t1Variant || w.details?.t1, w.setDetails?.t1);
                    sets += countSets(w.setDetails?.t2Name || w.setDetails?.t2BaseLift, w.setDetails?.t2);
                    (w.setDetails?.accessories || []).forEach(a => {
                        if (!a.name || !a.completed) return;
                        const imp = impact(a.name);
                        const contribution = imp[muscle] || 0;
                        if (contribution >= 0.3) {
                            sets += a.completed * contribution;
                        }
                    });
                }
                return M.round(sets * 10) / 10;
            }
        };

        const ACHIEVEMENTS = [
            { id: 'first', title: 'First Steps', icon: '\u{1F3AF}', check: h => h.length >= 1 }, { id: 'week', title: 'Week Warrior', icon: '\u{1F525}', check: h => h.length >= 7 }, { id: 'month', title: 'Monthly Master', icon: '\u{1F4AA}', check: h => h.length >= 30 }, { id: 'century', title: 'Century Club', icon: '\u{1F3C6}', check: h => h.length >= 100 },
            { id: 'pr1', title: 'PR Machine', icon: '\u{1F4C8}', check: h => h.some(w => w.pr || w.t2PR) }, { id: 'pr5', title: 'Gains Train', icon: '\u{1F682}', check: h => h.filter(w => w.pr || w.t2PR).length >= 5 }, { id: 'vol', title: 'Volume King', icon: '\u{1F451}', check: h => U.sum(h, 'totalVolume') >= 1e5 },
            { id: 'back', title: 'Comeback Kid', icon: '\u{1F4AB}', check: h => { if (h.length < 3) return false; const s = [...h].sort((a, b) => a.timestamp - b.timestamp); for (let i = 2; i < s.length; i++) if ((s[i].timestamp - s[i - 1].timestamp) > 12096e5) return true; return false } },
            { id: 'star', title: 'Five Star', icon: '\u2728', check: h => h.some(w => w.rating === 5) }, { id: 'streak10', title: 'Consistency', icon: '\u{1F517}', check: (_, s) => s >= 10 },
            { id: 'tonnage50k', title: 'Iron Mover', icon: '\u{1F3CB}\uFE0F', check: h => h.some(w => (w.totalVolume || 0) >= 50000) }, { id: 'dawn', title: 'Early Bird', icon: '\u{1F305}', check: h => h.some(w => new D(w.timestamp).getHours() >= 4 && new D(w.timestamp).getHours() < 7) },
            { id: 'supercomp', title: 'Perfect Timing', icon: '\u26A1', check: (h, s, app) => app && app.cache?.recovery?.some(g => g.muscles?.some(m => m.supercompensating)) },
            { id: 'balanced', title: 'Balanced Athlete', icon: '\u2696\uFE0F', check: (h, s, app) => { if (!app?.cache?.mgVol) return false; const v = app.cache.mgVol; const vals = [v.Push, v.Pull, v.Legs].filter(x => x > 0); if (vals.length < 3) return false; const avg = U.avg(vals); return vals.every(x => M.abs(x - avg) / avg < 0.25); } }
        ];

        const EX_OPTS = { bench_variants: { base: 'Bench', opt: [['Bench', 1], ['Incline Bench', .85], ['Close Grip Bench', .9], ['DB Bench', .8], ['Paused Bench', .9], ['Spoto Press', .85], ['Floor Press', .9]] }, ohp_variants: { base: 'OHP', opt: [['OHP', 1], ['Seated OHP', .95], ['DB OHP', .85], ['Push Press', 1.1], ['Z Press', .75], ['Arnold Press', .7], ['Behind Neck Press', .8]] }, squat_variants: { base: 'Squat', opt: [['Squat', 1], ['Front Squat', .85], ['Pause Squat', .85], ['Box Squat', .9], ['SSB Squat', .9], ['Goblet Squat', .5], ['Tempo Squat', .8]] }, deadlift_variants: { base: 'Deadlift', opt: [['Deadlift', 1], ['Sumo DL', 1], ['Romanian DL', .7], ['Trap Bar DL', 1.05], ['Deficit DL', .9], ['Paused DL', .85], ['Block Pull', 1.1], ['SLDL', .7]] }, row_variants: { base: 'Row', opt: [['Row', 1], ['Pendlay Row', .95], ['DB Row', .85], ['Cable Row', .9], ['T-Bar Row', 1], ['Seal Row', .8], ['Chest Supported Row', .85], ['Meadows Row', .7]] }, triceps: { opt: [['Tri'], ['Pushdowns'], ['Skull Crushers'], ['Dips'], ['OH Tricep Ext'], ['Close Grip BP'], ['JM Press'], ['Tricep Kickbacks']] }, biceps: { opt: [['Bi'], ['Barbell Curl'], ['DB Curl'], ['Hammer Curl'], ['Preacher Curl'], ['Incline Curl'], ['Cable Curl'], ['Spider Curl']] }, vertical_pull: { opt: [['Pullups'], ['Chin-ups'], ['Lat Pulldown'], ['LatPD'], ['Neutral Pullups'], ['Chins'], ['Wide Grip Pulldown'], ['Close Grip Pulldown']] }, leg_accessories: { opt: [['Legs'], ['Leg Press'], ['Lunges'], ['Leg Curl'], ['Leg Ext'], ['Calf Raises'], ['Bulgarian Split'], ['Hip Thrust'], ['Hack Squat'], ['Nordic Curl']] }, core: { opt: [['Abs'], ['Hanging Leg Raise'], ['Cable Crunch'], ['Ab Wheel'], ['Planks'], ['Russian Twists'], ['Dead Bug'], ['Pallof Press']] }, arms: { opt: [['Arms'], ['Curls + Pushdowns'], ['Hammer + Dips'], ['Arm Circuit'], ['Supersets']] }, dl_accessory: { base: 'Deadlift', opt: [['DL', 1], ['Romanian DL', .7], ['SLDL', .7], ['Good Morning', .5], ['Back Extension', .3]] } };

        const EX_INDEX = {}, MATCHERS = [[/(curl|bi|spider|preacher)/i, { bi: 1, forearm: .3, grip: .2 }], [/(pushdown|extension|skull|tri|dip|kickback)/i, { tri: 1, frontDelt: .2 }], [/(pullup|chin|lat|pulldown)/i, { lats: 1, bi: .5, rearDelt: .3, grip: .4, traps: .2 }], [/(row|t-bar|seal)/i, { lats: .8, bi: .5, rearDelt: .5, traps: .4, grip: .6, lowBack: .3 }], [/(leg press|lunge|split|hack squat)/i, { quads: .7, hams: .4, glutes: .6 }], [/(ham|rdl|stiff|good morning|nordic)/i, { hams: 1, glutes: .5, lowBack: .6 }], [/(calf|raise)/i, { calves: 1 }], [/(ab|core|plank|crunch|hanging|russian|dead bug|pallof)/i, { abs: 1, lowBack: .2 }], [/(arm|superset)/i, { tri: .5, bi: .5, forearm: .2 }], [/(shrug|trap|face)/i, { traps: 1, rearDelt: .5 }], [/(rear|reverse|fly)/i, { rearDelt: 1, traps: .3 }], [/(chest|fly|cable|pec)/i, { chest: .8, frontDelt: .2 }]];
        Object.entries(EX_OPTS).forEach(([k, g]) => g.opt.forEach(([id, m = 1]) => EX_INDEX[id] = { id, name: id, mult: m, groupKey: k, base: g.base }));
        const _imp = {};
        const MAX_IMP_CACHE = 300;
        const impact = id => {
            if (!id) return {};
            const lc = id.toLowerCase();
            if (_imp[lc]) return _imp[lc];
            const directHit = DATA.getAccessoryImpact(id);
            if (directHit) { _imp[lc] = directHit; return _imp[lc]; }
            const ex = EX_INDEX[id];
            if (ex && DATA.muscles[ex.base]) { _imp[lc] = DATA.muscles[ex.base]; return _imp[lc]; }
            const m = MATCHERS.find(x => x[0].test(lc));
            _imp[lc] = m ? m[1] : {};
            if (Object.keys(_imp).length > MAX_IMP_CACHE) delete _imp[Object.keys(_imp)[0]];
            return _imp[lc];
        };
        const normalizeExerciseName = value => {
            const raw = String(value || '').trim();
            if (!raw) return null;
            if (/^dl$/i.test(raw)) return 'Deadlift';
            const exact = Object.keys(DATA.muscles).find(name => name.toLowerCase() === raw.toLowerCase())
                || Object.keys(EX_INDEX).find(name => name.toLowerCase() === raw.toLowerCase());
            if (exact) return exact;
            if (/\b(deadlift|dl)\b/i.test(raw)) return 'Deadlift';
            if (/\bsquat\b/i.test(raw)) return 'Squat';
            if (/\bbench\b/i.test(raw)) return 'Bench';
            if (/\b(ohp|overhead\s+press)\b/i.test(raw)) return 'OHP';
            if (/\brow\b/i.test(raw)) return 'Row';
            return Object.keys(impact(raw)).length ? raw : null;
        };
        const plateInventory = unit => unit === 'kg' ? [25, 20, 10, 5, 2.5, 1.25] : (DATA.ui.plates[unit] || DATA.ui.plates.lbs);
        const plateLoadForSide = (sideWeight, unit) => {
            const plates = [];
            if (!Number.isFinite(sideWeight) || sideWeight <= 0) return plates;
            if (unit === 'kg' && M.abs(sideWeight - 40) < .01) return [20, 20];
            let r = sideWeight;
            plateInventory(unit).forEach(p => { while (r >= p - .01) { plates.push(p); r -= p; } });
            return plates;
        };

        let charts = {};
        const upChrt = (id, t, d, c, f = true) => { const el = document.getElementById(id); if (!el) return; const isLight = document.documentElement.classList.contains('theme-light'), grid = isLight ? 'rgba(15,23,42,0.10)' : 'rgba(255,255,255,0.10)', tick = isLight ? '#475569' : '#94a3b8'; if (charts[id]) charts[id].destroy(); charts[id] = new Chart(el, { type: t, data: { labels: d.l, datasets: [{ data: d.d, borderColor: c, backgroundColor: c + '80', tension: .3, fill: f, pointRadius: t === 'line' ? 3 : 0, pointBackgroundColor: c }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: false }, scales: t === 'radar' ? { r: { ticks: { display: false }, grid: { color: grid }, angleLines: { color: grid }, pointLabels: { color: tick, font: { size: 10 } } } } : { x: { display: false }, y: { grid: { color: grid }, ticks: { color: tick } } } } }) };
        const destroyCharts = () => { Object.values(charts).forEach(c => { if(c) c.destroy(); }); charts = {}; };

        const PROG = {
            nsuns: c => {
                const step = c.u === 'kg' ? 2.5 : 5;
                if (c.tier === 't2') {
                    const noFails = c.sets.every(s => !s.failed);
                    return c.all && noFails ? { add: step / 2, method: 'nsuns_t2_increase' } : { add: 0, method: 'nsuns_t2_hold' };
                }
                if (!c.top) return { add: 0, method: c.all ? 'nsuns_hold_no_amrap' : 'nsuns_hold_incomplete' };

                const target = c.top.reps, actual = c.top.performed, delta = actual - target;
                let add = 0;

                if (target >= 5) {
                    add = delta < -2 ? -step : delta >= 3 ? step : delta >= 1 ? (step / 2) : 0;
                } else {
                    if (actual <= 1) add = 0;
                    else if (actual <= 3) add = step;
                    else if (actual <= 5) add = step * 2;
                    else add = step * 3;
                }

                add = add > 0 ? M.max(step / 2, add) : add < 0 ? M.min(-step / 2, add) : 0;
                return { add, method: add > 0 ? 'nsuns_increase' : add < 0 ? 'nsuns_decrease' : 'nsuns_hold' };
            },
            '531': c => {
                if (c.tier !== 't1') return { add: 0, method: '531_t2_no_change' };
                if (((c.cycleWeek - 1) % 4) + 1 !== 4) return { add: 0, method: '531_in_cycle' };
                if (!c.all || c.top?.performed < c.top?.reps) {
                    const failedSession = h => {
                        const sets = h.setDetails?.t1 || [];
                        const top = c.findTop(sets);
                        return top ? top.performed < top.reps : !sets.length || sets.some(s => !s.completed || s.failed);
                    };
                    const f = c.hist.slice(-16).filter(h => h.details?.t1 === c.lift && failedSession(h)).length;
                    return f >= 2 ? { add: -(c.tm * .1), method: '531_deload' } : { add: 0, method: '531_hold' };
                }
                const baseAdd = ['Bench', 'OHP'].includes(c.lift) ? (c.u === 'kg' ? 2.5 : 5) : (c.u === 'kg' ? 5 : 10);
                return { add: baseAdd, method: '531_cycle' };
            },
            gzclp: c => {
                const k = c.tier === 't1' ? 't1Stage' : 't2Stage', s = c.state[c.lift] = c.state[c.lift] || { t1Stage: 1, t2Stage: 1 }, st = s[k] || 1;
                const am = c.sets.find(x => x.amrap && x.completed && !x.failed), p = c.tier === 't1' ? (am && am.performed >= am.reps && c.all) : c.all;
                if (!p) {
                    if (st >= 3) { s[k] = 1; return { add: -(c.tm * .15), method: `gz_${c.tier}_stage_reset` }; }
                    s[k] = st + 1; return { add: 0, method: `gz_${c.tier}_stage_advance` };
                }
                const baseStep = c.u === 'kg' ? 2.5 : 5;
                return { add: baseStep, method: `gz_${c.tier}_linear` };
            },
            linear: c => {
                const step = c.u === 'kg' ? 2.5 : 5;
                if (c.tier !== 't1') return c.all ? { add: step, method: 't2_linear' } : { add: 0, method: 't2_hold' };
                if (c.top?.performed != null) {
                    const d = c.top.performed - c.top.reps;
                    let add = d < 0 ? 0 : d <= 2 ? step : step * 2;
                    add = add > 0 ? M.max(step / 2, add) : 0;
                    return { add, method: d < 0 ? 'hold_missed' : 'amrap_linear' };
                }
                return c.all ? { add: step, method: 'linear' } : { add: 0, method: 'hold' };
            },
            stronglifts: c => {
                const s = c.state[c.lift] = c.state[c.lift] || { cf: 0, dc: 0, slScheme: c.lift === 'Deadlift' ? 'dl' : 'std' };
                if (!c.all) {
                    s.cf = (s.cf || 0) + 1;
                    if (s.cf >= 3) {
                        s.cf = 0;
                        const d = -(c.tm * .1);
                        s.dc = (s.dc || 0) + 1;
                        if (s.dc >= 3) {
                            const n = { 'std': '3x5', '3x5': '3x3', '3x3': '1x3', 'dl': '3x5', '1x3': '1x3' }[s.slScheme];
                            if (n && s.slScheme !== '1x3') { s.slScheme = n; s.dc = 0; return { add: d, method: 'sl_to_' + n }; }
                        }
                        return { add: d, method: 'sl_deload' };
                    }
                    return { add: 0, method: 'sl_retry' };
                }
                s.cf = 0;
                const baseStep = c.lift === 'Deadlift' ? (c.u === 'kg' ? 5 : 10) : (c.u === 'kg' ? 2.5 : 5);
                return { add: baseStep, method: 'sl_linear' };
            }
        };
        PROG.amrap_linear = PROG.linear; PROG.lin = PROG.linear; PROG.gz = PROG.gzclp; PROG.sl = PROG.stronglifts;

        const sha256 = async (message, salt = 'lift_v1_') => {
            const msgBuffer = new TextEncoder().encode(salt + message);
            const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
            return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
        };
        const M = Math, D = Date, LS = localStorage, J = JSON;

        const muscleRecoveryHours = (muscle, highIntensity = false) => {
            const base = DATA.halfLife[muscle] || 36;
            return M.max(48, M.min(72, base + (highIntensity ? 24 : 12)));
        };

        const setRestFloor = ({ tier = 't1', set = null, exercise = null, tm = 0 } = {}) => {
            const g = DATA.restGuidelines;
            if (!set) return tier === 't1' ? g.heavyCompound : tier === 't2' ? g.hypertrophyCompound : g.accessory;
            const reps = U.safe(set.performed ?? set.reps, 0);
            const intensity = tm > 0 && set.weight > 0 ? set.weight / tm : (set.amrap ? .9 : tier === 't1' ? .8 : .65);
            const imp = impact(exercise);
            const compound = !!(exercise && (DATA.compoundAccessories.has(exercise) || Object.keys(imp).some(m => !DATA.isolationDominant.has(m) && (imp[m] || 0) >= .5)));
            const cns = imp.cns || 0;
            const highSystemicCompound = cns >= .5 || /deadlift|(^|\s)dl($|\s)|squat/i.test(exercise || '');
            if (compound && (intensity >= .9 || set.amrap || (intensity >= .8 && reps <= 3))) return highSystemicCompound ? g.maxTimer : g.maxEffort;
            if (compound && (intensity >= .8 || (intensity >= .7 && reps <= 5))) return cns >= .8 ? g.maxEffort : g.heavyCompound;
            if (compound && (intensity >= .6 || reps >= 6)) return g.hypertrophyCompound;
            return g.accessory;
        };

        function analyze_fatigue_and_suggest_rest(history = [], programState = {}, opts = {}) {
            const now = opts.now ?? programState.now ?? U.now();
            const prefs = mergePrefs(programState.prefs || {});
            const program = programState.program || prefs.program || 'nsuns';
            const days = DATA.progs[program]?.days || DATA.progs.nsuns.days;
            const dayIdx = programState.dayIdx ?? programState.pIdx ?? 0;
            const day = programState.currentDay || programState.day || (days.length ? days[dayIdx % days.length] : null) || {};
            const threshold = opts.consecutiveDayThreshold ?? 5;
            const targetThreshold = opts.targetThreshold ?? .3;
            const highIntensityThreshold = opts.highIntensityThreshold ?? .75;
            const tms = programState.tms || {};
            const recoveryMap = programState.recoveryMap || {};
            const reasons = [];
            const targets = {};
            const targetRecoveryHours = {};
            const addTarget = name => {
                Object.entries(impact(name)).forEach(([m, v]) => {
                    if (v >= targetThreshold) {
                        targets[m] = M.max(targets[m] || 0, v);
                        targetRecoveryHours[m] = M.max(targetRecoveryHours[m] || 0, muscleRecoveryHours(m, true));
                    }
                });
            };

            if (programState.session?.t1) addTarget(programState.session.t1.name);
            if (programState.session?.t2) addTarget(programState.session.t2.selectedExercise || programState.session.t2.name);
            (programState.session?.acc || []).forEach(a => addTarget(a.selectedExercise || a.name));
            if (!Object.keys(targets).length) {
                addTarget(day.t1);
                addTarget(day.t2);
                (day.acc || []).forEach(a => addTarget(a.selectedExercise || a.name));
            }

            const dayNumbers = [...new Set((history || [])
                .filter(h => h?.timestamp && h.timestamp <= now)
                .map(h => M.floor(h.timestamp / 864e5)))].sort((a, b) => b - a);
            let consecutiveTrainingDays = 0;
            if (dayNumbers.length) {
                let expected = dayNumbers[0];
                for (const d of dayNumbers) {
                    if (d === expected) { consecutiveTrainingDays++; expected--; }
                    else if (d < expected) break;
                }
            }
            const cautions = [];
            const restReasons = [];
            if (consecutiveTrainingDays > threshold + 1) restReasons.push(`${consecutiveTrainingDays} consecutive training days exceeds a sustainable recovery window`);
            else if (consecutiveTrainingDays > threshold) cautions.push(`${consecutiveTrainingDays} consecutive training days: keep this session submaximal if warm-ups feel slow`);

            const localFatigue = {};
            const highIntensityHits = {};
            let systemicLoad = 0;
            const maxOverlapHours = opts.overlapHours ?? M.max(48, ...Object.values(targetRecoveryHours));
            const registerHit = (name, sets, ageHours, tmFallback, rpe = 7) => {
                if (!name || !Array.isArray(sets) || ageHours > maxOverlapHours) return;
                const imp = impact(name);
                const base = EX_INDEX[name]?.base || name;
                const tm = tmFallback || tms[base] || tms[name] || 0;
                sets.forEach(s => {
                    if (!s.completed || s.weight <= 0) return;
                    const reps = s.performed != null ? s.performed : (s.reps || 0);
                    const intensity = tm > 0 ? s.weight / tm : (s.amrap ? highIntensityThreshold : .65);
                    const high = intensity >= highIntensityThreshold || s.failed || (s.rpe ?? rpe) >= 8.5 || s.amrap;
                    const setFatigue = U.fatigue(s.weight, reps, tm, !!s.failed, s.rpe ?? rpe);
                    systemicLoad += setFatigue * (imp.cns || (DATA.compoundAccessories.has(name) ? .25 : .08));
                    Object.entries(imp).forEach(([m, v]) => {
                        if (!targets[m] || v < targetThreshold) return;
                        const recoveryHours = targetRecoveryHours[m] || muscleRecoveryHours(m, high);
                        if (ageHours > recoveryHours) return;
                        const contribution = setFatigue * v * (high ? 1 : .45);
                        localFatigue[m] = (localFatigue[m] || 0) + contribution;
                        if (high) {
                            const prev = highIntensityHits[m];
                            highIntensityHits[m] = {
                                muscle: m,
                                ageHours: prev ? M.min(prev.ageHours, ageHours) : ageHours,
                                load: (prev?.load || 0) + contribution,
                                recoveryHours
                            };
                        }
                    });
                });
            };

            const orderedHistory = [...(history || [])].sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
            for (let i = orderedHistory.length - 1; i >= 0; i--) {
                const w = orderedHistory[i];
                if (!w?.timestamp) continue;
                const ageHours = (now - w.timestamp) / 36e5;
                if (ageHours < 0) continue;
                if (ageHours > maxOverlapHours) break;
                registerHit(w.details?.t1, w.setDetails?.t1, ageHours, w.details?.preTM || w.details?.tm, w.rpe || 7);
                registerHit(w.setDetails?.t2Name || w.setDetails?.t2BaseLift, w.setDetails?.t2, ageHours, w.setDetails?.t2PreTM || w.setDetails?.t2PostTM, w.rpe || 7);
                (w.setDetails?.accessories || []).forEach(a => {
                    if (!a?.name || !a.completed) return;
                    const reps = U.prs(a.reps);
                    const wt = DATA.compoundAccessories.has(a.name) ? 95 : 45;
                    registerHit(a.name, Array.from({ length: a.completed }, () => ({ weight: wt, reps, completed: true })), ageHours, wt / .65, w.rpe || 7);
                });
            }

            const overlappingMuscles = Object.values(highIntensityHits)
                .filter(x => x.load >= 6 || (recoveryMap[x.muscle] ?? 100) < 55)
                .sort((a, b) => b.load - a.load)
                .map(x => ({ muscle: x.muscle, ageHours: M.round(x.ageHours * 10) / 10, recoveryHours: x.recoveryHours, load: M.round(x.load * 10) / 10, recovery: recoveryMap[x.muscle] ?? null }));
            if (overlappingMuscles.length) {
                cautions.push(`Recent high-intensity overlap: ${overlappingMuscles.map(x => `${x.muscle} <${x.recoveryHours}h`).join(', ')}`);
            }

            const lowRecoveryTargets = Object.keys(targets)
                .filter(m => (recoveryMap[m] ?? 100) < 50)
                .map(m => ({ muscle: m, recovery: recoveryMap[m] }));
            if (lowRecoveryTargets.length) {
                cautions.push(`Target recovery under 50%: ${lowRecoveryTargets.map(x => `${x.muscle} ${x.recovery}%`).join(', ')}`);
            }

            const cnsRecovery = recoveryMap.cns ?? 100;
            if (cnsRecovery < 45) cautions.push(`Systemic readiness is ${cnsRecovery}%`);

            const severeOverlap = overlappingMuscles.filter(x => x.recovery != null && x.recovery < 35);
            const severeTargets = lowRecoveryTargets.filter(x => x.recovery < 35);
            if (severeOverlap.length) restReasons.push(`Severe recent overlap: ${severeOverlap.map(x => x.muscle).join(', ')}`);
            if (severeTargets.length) restReasons.push(`Target muscles are not recovered: ${severeTargets.map(x => `${x.muscle} ${x.recovery}%`).join(', ')}`);
            if (cnsRecovery < 25) restReasons.push(`Systemic readiness is critically low at ${cnsRecovery}%`);

            reasons.push(...restReasons, ...cautions);
            const shouldRest = restReasons.length > 0;
            const shouldModify = !shouldRest && cautions.length > 0;
            const localHours = overlappingMuscles.length ? M.max(12, M.ceil(M.max(...overlappingMuscles.map(x => x.recoveryHours - x.ageHours)) / 12) * 12) : 0;
            const suggestedHours = shouldRest ? M.min(72, M.max(24, localHours, cnsRecovery < 25 ? 48 : 0, consecutiveTrainingDays > threshold + 1 ? 24 : 0)) : 0;
            const severity = shouldRest ? 'high' : shouldModify ? 'moderate' : 'none';
            return {
                shouldRest,
                action: shouldRest ? 'rest' : shouldModify ? 'modify' : 'train',
                severity,
                reasons,
                restReasons,
                cautions,
                summary: shouldRest ? `Rest ${suggestedHours}h before ${day.t || day.title || 'next session'}` : shouldModify ? 'Train, but autoregulate volume or top-set effort' : 'No recovery adjustment needed',
                suggestedHours,
                resumeAt: shouldRest ? now + suggestedHours * 36e5 : null,
                consecutiveTrainingDays,
                overlappingMuscles,
                lowRecoveryTargets,
                localFatigue: Object.fromEntries(Object.entries(localFatigue).map(([k, v]) => [k, M.round(v * 10) / 10])),
                systemicLoad: M.round(systemicLoad * 10) / 10,
                targetMuscles: Object.keys(targets),
                progressionAdjustment: { type: shouldRest ? 'hold_session_index' : 'none', tmDelta: 0, preserveWeek: true, preserveCycleWeek: true }
            };
        }

        function validateProgramProgressionContext(programKey, data = DATA) {
            const program = data.progs[programKey];
            if (!program) return { program: programKey, status: 'fail', issues: ['Program not found'], notes: [] };
            const schemeGroup = data.schemes[programKey] || data.schemes[program.prog] || {};
            const rows = Object.entries(schemeGroup).flatMap(([scheme, vals]) => vals.map((row, index) => ({ scheme, index, row })));
            const intensities = rows.filter(r => Array.isArray(r.row) && r.row[0] > 0 && r.row[0] <= 1.25).map(r => r.row[0]);
            const avgIntensity = intensities.length ? U.avg(intensities) : 0;
            const hasDeload = programKey === '531' || programKey === 'stronglifts' || /deload|failure|stage/i.test(program.progressionDesc || '');
            const daysPerWeek = program.daysPerWeek || program.days.length;
            const issues = [];
            const adjustments = [];
            const dayAudit = [];
            const schemeAudit = [];
            if (!program.days?.length) issues.push('No training days defined');
            if (!Object.keys(schemeGroup).length) issues.push('No scheme group found');
            if (daysPerWeek >= 5 && !hasDeload && avgIntensity >= .7) adjustments.push('High frequency/intensity is mitigated by dynamic rest suggestions and app-level fatigue/performance deload checks');
            (program.days || []).forEach((day, dayIndex) => {
                const names = [day.t1, day.t2, ...(day.acc || []).map(a => a.name)].filter(Boolean);
                const missingImpact = names.filter(name => !Object.keys(impact(name)).length);
                if (missingImpact.length) issues.push(`Missing muscle impact on ${programKey} day ${dayIndex + 1}: ${missingImpact.join(', ')}`);
                const targetMuscles = [...new Set(names.flatMap(name => Object.keys(impact(name))))];
                const recoveryHours = targetMuscles.length ? M.max(...targetMuscles.map(m => muscleRecoveryHours(m, true))) : 48;
                dayAudit.push({
                    day: dayIndex + 1,
                    title: day.t || day.title || `Day ${dayIndex + 1}`,
                    exercises: names,
                    targetMuscles,
                    recoveryHours,
                    missingImpact
                });
            });
            rows.forEach(({ scheme, index, row }) => {
                if (!Array.isArray(row)) return;
                const [pct, reps, flag] = row;
                if (pct > 1.25) {
                    schemeAudit.push({ scheme, index, sets: pct, reps, prescriptionType: 'sets_reps', repFit: reps >= 1 && reps <= 15 });
                    return;
                }
                const intensityClass = pct >= .9 ? 'max_strength' : pct >= .8 ? 'strength' : pct >= .6 ? 'hypertrophy_strength' : 'volume';
                const repFit = pct >= .8 ? reps <= 8 : pct >= .65 ? reps >= 3 && reps <= 12 : reps >= 5;
                const restFloor = setRestFloor({ tier: scheme === 'bbb' || scheme === 'sec' ? 't2' : 't1', set: { weight: pct, reps, amrap: flag === '+' }, exercise: 'Bench', tm: 1 });
                if (!repFit) issues.push(`${programKey}.${scheme}[${index}] has incongruent ${M.round(pct * 100)}% x ${reps}`);
                schemeAudit.push({ scheme, index, pct, reps, amrap: flag === '+', intensityClass, restFloor, repFit });
            });
            return {
                program: programKey,
                goal: /hypertrophy|volume|bbb/i.test(`${program.name} ${program.desc}`) ? 'hypertrophy_strength' : 'strength',
                status: issues.length ? 'fail' : adjustments.length ? 'adjust' : 'pass',
                issues,
                adjustments,
                notes: [`${program.name}: ${daysPerWeek} days/week, avg intensity ${M.round(avgIntensity * 100)}%, ${program.progressionDesc}`],
                hasDeload,
                avgIntensity: M.round(avgIntensity * 1000) / 1000,
                dayAudit,
                schemeAudit
            };
        }

        const validateAllProgramScience = () => Object.keys(DATA.progs).map(k => validateProgramProgressionContext(k));

        function app() {
            return {
                view: 'dashboard', icons: ICONS, UI: DATA.ui, PROGRAMS: DATA.progs, ACHIEVEMENTS,
                user: null, auth: { username: '', password: '', error: '', loading: false }, syncing: false, _syncTimer: null, _syncCount: 0,
                tms: { Bench: 0, Squat: 0, Deadlift: 0, OHP: 0, Row: 0 }, state: { Bench: {}, Squat: {}, Deadlift: {}, OHP: {}, Row: {} },
                prs: {}, history: [], bwLog: [], achievements: [], e1rmHistory: {}, templates: [], exerciseNotes: {}, tonnageGoal: 0, restHistory: [], xp: 0,
                prefs: { ...DEFAULT_PREFS },
                activeModal: null, session: {}, savedSession: null, timer: { active: false, start: null, dur: 0, rem: 0, pct: 0, label: 'Rest', zeroCrossed: false },
                tempBodyWeight: null, showWarmups: false, plate: { open: false, w: 0, plates: [], originalW: 0 }, cal: { monthName: '', days: [], offset: 0 }, sessionTimerStr: '0:00', deloadInfo: {}, dynamicRestSuggestion: null, sessionRating: 0, sessionNotes: '', sessionRPE: 7,
                currentAchievement: null, selectedLog: null, historyFilter: 'all', previousWorkout: null, isEditingLog: false, swapState: { t2: false, acc: null, q: '' }, zenMode: false, zenAmrap: null, setEdit: { tier: 't1', idx: 0, weight: 0, reps: 0, performed: null, failed: false, amrap: false, completed: false, rpe: null },
                setup: {}, idx: 0, pIdx: 0, week: 1, cycleWeek531: 1, streak: 0, cache: { recovery: [], volume: [], recoveryMap: {}, mgVol: { Push: 0, Pull: 0, Legs: 0, Core: 0 }, volumeLandmarks: {}, fatigueDeloadWarning: null }, wakeLock: null, sessionVolume: 0, restTimes: [], templateName: '', showExNoteModal: false, exNoteTarget: '', exNoteText: '', calSummary: {}, freqData: {}, longestStreak: 0, batchAdjust: 0, batchAdjustTier: null, undoState: { visible: false, timer: null, action: null, label: '', leaving: false }, autoSaveTimer: null, lastSetCompletedAt: null, swipeData: { startX: 0, startY: 0, dx: 0, active: false, tier: null, idx: null },
                expandedRecovery: null, chartLift: 'Bench', metronomeActive: false, smartAddOptions: [],
                _cacheDebounce: null, _finishing: false, amrapState: { set: null, tier: null, val: '' }, _volDirty: false,

                destroy() {
                    if (this.autoSaveTimer) clearInterval(this.autoSaveTimer);
                    if (this._syncTimer) clearTimeout(this._syncTimer);
                    if (this._cacheDebounce) clearTimeout(this._cacheDebounce);
                    this.relWake();
                    destroyCharts();
                },

                init(isRehydrating = false) {
                    window.__app = this;
                    this.user = U.g('lift_user', null);
                    this.prefs = mergePrefs(U.g('lift_preferences', {}));
                    this.applyTheme();
                    if (!this._themeMedia && window.matchMedia) {
                        this._themeMedia = window.matchMedia('(prefers-color-scheme: dark)');
                        const onThemeChange = () => { if (this.prefs.theme === 'system') this.applyTheme(); };
                        this._themeMedia.addEventListener ? this._themeMedia.addEventListener('change', onThemeChange) : this._themeMedia.addListener?.(onThemeChange);
                    }

                    if (!this.user && !isRehydrating) {
                        this.view = 'login';
                        return;
                    }

                    const d = U.g('nsuns_ultimate', {}), s = U.g('lift_preferences', {});
                    Object.assign(this, { tms: d.tms || this.tms, history: normalizeHistoryRecords(d.history || []), idx: d.idx || 0, week: d.week || 1, cycleWeek531: d.cycleWeek531 || 1, streak: d.streak || 0, state: d.state || this.state, prefs: mergePrefs({ ...this.prefs, ...s }), bwLog: normalizeBodyweightLog(U.g('lift_bodyweight', [])), achievements: U.g('lift_achievements', []), prs: U.g('lift_prs', {}), e1rmHistory: U.g('lift_e1rm_history', {}), templates: U.g('lift_templates', []), exerciseNotes: U.g('lift_exercise_notes', {}), tonnageGoal: U.g('lift_tonnage_goal', 0), restHistory: U.g('lift_rest_history', []), xp: U.g('lift_xp', 0) });
                    this.savedSession = U.g('lift_active_session') || U.g('lift_active_session_backup');
                    this.prefs.barWeight = this.prefs.barWeight || (this.prefs.weightUnit === 'kg' ? 20 : 45); this.applyRM(); this.applyTheme();
                    this.pIdx = this.idx; this.computeLongestStreak(); this.computeFrequency(); this.computeStreak(); this.updCache();
                    if (Object.keys(this.tms).length) this.chartLift = Object.keys(this.tms)[0];
                    if (this.savedSession?.t1) this.activeModal = 'resume'; else if (!d.tms) this.view = 'setup';
                    window.addEventListener('pointerdown', this.unlockAudio, { once: true, passive: true });
                    this.$nextTick(() => { this.draw(); this.calBuild(); this.chkAch(); this.scrollToActive() });
                    if (!isRehydrating) setInterval(() => this.tick(), 1000);

                    if (!isRehydrating) {
                        if (this.autoSaveTimer) clearInterval(this.autoSaveTimer);
                        this.autoSaveTimer = setInterval(() => {
                            if (this.session?.start && this.session?.t1 && !this._finishing) {
                                this._saveSessionOnly();
                                U.s('lift_active_session_backup', this.session);
                            }
                        }, 10000);
                        this.pullFromCloud();
                    }
                },

                async pantryReq(method, basket, body = null) {
                    const url = `https://getpantry.cloud/apiv1/pantry/${PANTRY_ID}/basket/${basket}`;
                    const opts = { method, headers: { 'Content-Type': 'application/json' } };
                    if (body) opts.body = JSON.stringify(body);
                    try {
                        const res = await fetch(url, opts);
                        if (!res.ok) return null;
                        return await res.json();
                    } catch (e) { return null; }
                },
                async handleLogin() {
                    this.auth.loading = true; this.auth.error = '';
                    if (!this.auth.username || !this.auth.password) { this.auth.error = 'Enter username and password'; this.auth.loading = false; return; }
                    const hash = await sha256(this.auth.password);
                    const basketName = 'lift_' + this.auth.username.toLowerCase().replace(/[^a-z0-9]/g, '');
                    const existing = await this.pantryReq('GET', basketName);

                    if (existing) {
                        if (existing.passwordHash !== hash) { this.auth.error = 'Invalid credentials'; this.auth.loading = false; return; }
                        this.user = { username: this.auth.username, basket: basketName, hash };
                        U.s('lift_user', this.user);
                        await this.pullFromCloud(existing);
                    } else {
                        this.user = { username: this.auth.username, basket: basketName, hash };
                        U.s('lift_user', this.user);
                        await this.pushToCloud(true);
                    }
                    this.auth.loading = false;
                    this.view = 'dashboard';
                    this.init(true);
                },
                logout() {
                    this.user = null;
                    U.d('lift_user');
                    this.auth = { username: '', password: '', error: '', loading: false };
                    this.view = 'login';
                    this.destroy();
                },
                async pullFromCloud(data = null) {
                    if (!this.user || this._syncCount > 0) return;
                    this._syncCount++;
                    this.syncing = true;
                    try {
                        const cloud = data || await this.pantryReq('GET', this.user.basket);
                        if (cloud && cloud.payload) {
                            const localLast = U.g('lift_last_sync', 0);
                            if (cloud.lastUpdated > localLast) {
                                const parsed = JSON.parse(cloud.payload);
                                Object.keys(parsed).forEach(k => { try { LS.setItem(k, JSON.stringify(parsed[k])) } catch(e){} });
                                U.s('lift_last_sync', cloud.lastUpdated);
                                this.init(true);
                            }
                        }
                    } catch (e) { console.warn("Sync failed"); } finally {
                        this._syncCount--;
                        this.syncing = this._syncCount > 0;
                    }
                },
                async pushToCloud() {
                    if (!this.user || this._syncCount > 0) return;
                    this._syncCount++;
                    this.syncing = true;
                    try {
                        const now = Date.now();
                        const keys = ['nsuns_ultimate', 'lift_preferences', 'lift_bodyweight', 'lift_achievements', 'lift_prs', 'lift_e1rm_history', 'lift_templates', 'lift_exercise_notes', 'lift_tonnage_goal', 'lift_rest_history', 'lift_xp'];
                        const payloadObj = {};
                        keys.forEach(k => { const v = LS.getItem(k); if (v) { try { payloadObj[k] = JSON.parse(v); } catch(e){} } });

                        const body = { passwordHash: this.user.hash, lastUpdated: now, payload: JSON.stringify(payloadObj) };
                        await this.pantryReq('POST', this.user.basket, body);
                        LS.setItem('lift_last_sync', now);
                    } catch (e) { console.warn("Push failed"); } finally {
                        this._syncCount--;
                        this.syncing = this._syncCount > 0;
                    }
                },
                triggerSync() {
                    if (!this.user) return;
                    if (this._syncTimer) clearTimeout(this._syncTimer);
                    this._syncTimer = setTimeout(() => this.pushToCloud(), 2500);
                },

                get currentLevel() { return M.max(1, M.floor(M.pow(this.xp / 1000, 0.5))); },
                get currentTitle() { const t = ['Initiate', 'Iron Novice', 'Steel Apprentice', 'Bronze Warrior', 'Silver Knight', 'Gold Spartan', 'Platinum Titan', 'Diamond Juggernaut', 'Astral Leviathan', 'Ultimate Lifter']; return t[M.min(t.length - 1, M.floor(this.currentLevel / 5))]; },
                get xpProgress() { const c = M.pow(this.currentLevel, 2) * 1000, n = M.pow(this.currentLevel + 1, 2) * 1000; return M.min(100, M.max(0, ((this.xp - c) / (n - c)) * 100)); },
                scrollToActive() { setTimeout(() => { document.getElementById('active-card')?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }); }, 100); },
                computeStreak() {
                    if (!this.history.length) { this.streak = 0; return; }
                    const dpw = DATA.progs[this.prefs.program]?.daysPerWeek || 3;
                    const maxGap = M.max(2, M.ceil(7 / dpw) + 1);
                    const d = [...new Set(this.history.map(h => h.isoDate))].sort().reverse(), t = U.iso(U.now());
                    let s = 0, c = t;
                    for (let i = 0; i < d.length; i++) {
                        if ((new D(c) - new D(d[i])) / 864e5 <= maxGap) { s++; c = d[i]; } else break;
                    }
                    this.streak = s;
                },
                tick() {
                    if (this.session.start) {
                        this.sessionTimerStr = U.fmt((U.now() - this.session.start) / 1000);
                        if (this._volDirty) { this.computeSessionVolume(); this._volDirty = false; }
                    }
                    if (this.timer.active) {
                        this.timer.rem = this.timer.dur - M.floor((U.now() - this.timer.start) / 1000); this.timer.pct = this.timer.dur > 0 ? M.max(0, this.timer.rem / this.timer.dur) : 0;
                        if (this.timer.rem <= 0 && !this.timer.zeroCrossed) { this.timer.zeroCrossed = true; if (this.prefs.timerSound) this.beep(); if (this.prefs.vibration && navigator.vibrate) navigator.vibrate([200, 100, 200]); }
                    }
                },
                handleEscape() { if (this.zenMode) return this.toggleZen(); if (this.activeModal) this.activeModal = null; if (this.plate.open) this.plate.open = false; },
                applyRM() { document.documentElement.classList.toggle('reduce-motion', !!this.prefs.reduceMotion); },
                applyTheme() { return applyThemePreference(this.prefs.theme); },
                setTheme(t) { this.prefs.theme = normalizeTheme(t); this.applyTheme(); this.savePrefs(); this.$nextTick?.(() => { this.draw?.(); this.drawPRCharts?.(); }); },
                unlockAudio() { try { if (!window.ac) window.ac = new (window.AudioContext || window.webkitAudioContext); if (ac.state === 'suspended') ac.resume(); } catch { } },
                nav(v) { destroyCharts(); this.view = v; if (v === 'calendar') this.calBuild(); if (v === 'dashboard') { this.$nextTick(() => { this.draw(); this.scrollToActive(); }); } if (v === 'records') this.$nextTick(() => this.drawPRCharts()); if (v !== 'workout') this.relWake(); },
                lifts: () => Object.keys(DATA.muscles), getWk() { const r = DATA.progs[this.prefs.program].days[this.pIdx % DATA.progs[this.prefs.program].days.length]; return { ...r, title: r.title || r.t, focus: r.focus || `${r.t1} + ${r.t2}` }; }, prevSim() { return this.history.slice().reverse().find(h => h.details?.t1 === this.getWk().t1); }, repLast() { const l = this.prevSim(); if (l) this.start(DATA.progs[this.prefs.program].days.find(d => d.t1 === l.details.t1)); },
                startCust() { this.start({ title: 'Custom Workout', t1: 'Bench', t2: 'Row', s: 'vol', t2s: 't2', acc: [] }); }, chgDay(d) { const l = DATA.progs[this.prefs.program].days.length; this.pIdx = (this.pIdx + d + l) % l; },
                fmt: U.fmt, fmtSet: ts => new D(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), daysOff() { return M.floor((U.now() - (this.history[this.history.length - 1]?.timestamp || U.now())) / 864e5); },
                exInfo: id => EX_INDEX[id] ? { ...EX_INDEX[id], group: EX_OPTS[EX_INDEX[id].groupKey] } : null, exAlts: id => EX_INDEX[id] ? EX_OPTS[EX_INDEX[id].groupKey].opt.map(o => ({ id: o[0], name: o[0], mult: o[1] || 1 })) : [{ id, name: id, mult: 1 }],
                baseTM(id) { return EX_INDEX[id]?.base || (this.tms[id] !== undefined ? id : null); }, exMult(id) { return EX_INDEX[id]?.mult || 1; }, exName(id) { return EX_INDEX[id]?.name || id; },
                _restFloorForSet(t, set = null, exerciseName = null) {
                    const base = this.baseTM(exerciseName) || exerciseName;
                    const tm = base ? (this.tms[base] || 0) * this.exMult(exerciseName || base) : 0;
                    return setRestFloor({ tier: t, set, exercise: exerciseName, tm });
                },
                getSmartRestDuration(t, set = null, exerciseName = null) {
                    const k = { t1: 'restT1', t2: 'restT2', acc: 'restT3', t3: 'restT3' }[t];
                    const floor = this._restFloorForSet(t, set, exerciseName);
                    if (!this.prefs.smartRest) return +this.prefs[k];
                    if (this.restHistory.length < 3) return M.max(+this.prefs[k], floor);
                    const cutoff = U.now() - 7 * 864e5;
                    const h = this.restHistory.filter(r => r.tier === t && r.timestamp >= cutoff).slice(-10);
                    const learned = h.length < 3 ? +this.prefs[k] : M.round(U.avg(h.map(x => x.actual)));
                    const cap = DATA.restGuidelines.maxTimer;
                    return M.max(floor, M.min(learned, cap));
                },
                recordActualRest(t) { if (!this.timer.start) return; const a = M.floor((U.now() - this.timer.start) / 1000); if (a > 5 && a < 600) { this.restHistory.push({ tier: t, actual: a, target: this.timer.dur, timestamp: U.now() }); if (this.restHistory.length > 100) this.restHistory = this.restHistory.slice(-100); U.s('lift_rest_history', this.restHistory); } },
                getAvgActualRest(t) { const h = this.restHistory.filter(r => r.tier === t).slice(-10); return h.length ? M.round(U.avg(h.map(x => x.actual))) : null; },
                getRestAnalysisState(day = null) {
                    return {
                        prefs: this.prefs,
                        program: this.prefs.program,
                        pIdx: this.pIdx,
                        dayIdx: this.session?.dayIdx ?? this.pIdx,
                        currentDay: day || this.getWk(),
                        session: this.session?.start ? this.session : null,
                        tms: this.tms,
                        recoveryMap: this.cache.recoveryMap,
                        now: U.now()
                    };
                },
                analyze_fatigue_and_suggest_rest(history = this.history, programState = this.getRestAnalysisState(), opts = {}) {
                    return analyze_fatigue_and_suggest_rest(history, programState, opts);
                },
                refreshDynamicRestSuggestion(day = null) {
                    this.updCache();
                    this.dynamicRestSuggestion = this.analyze_fatigue_and_suggest_rest(this.history, this.getRestAnalysisState(day));
                    return this.dynamicRestSuggestion;
                },
                getSets(sk, l, tm, t, exOv = null) {
                    const { program: p, weightUnit: u, microplates: m } = this.prefs, effTM = (this.tms[this.baseTM(exOv || l)] || tm) * this.exMult(exOv || l);
                    let rs = [];
                    if (p === 'gzclp') { const st = this.state[l]?.[t === 't1' ? 't1Stage' : 't2Stage'] || 1; rs = DATA.schemes.gzclp[t === 't1' ? (st === 1 ? 't1' : st === 2 ? 't1_s2' : 't1_s3') : (st === 1 ? 't2' : st === 2 ? 't2_s2' : 't2_s3')] || DATA.schemes.gzclp.t1; }
                    else if (p === 'stronglifts') rs = DATA.schemes.stronglifts[this.state[l]?.slScheme || (l === 'Deadlift' ? 'dl' : 'std')] || DATA.schemes.stronglifts.std;
                    else if (p === '531' && t === 't1') { const cw = ((this.cycleWeek531 - 1) % 4) + 1; rs = DATA.schemes['531'][cw === 4 ? 'del' : `w${cw}`]; }
                    else rs = (DATA.schemes[p] || DATA.schemes.nsuns)[sk] || (DATA.schemes[p] || DATA.schemes.nsuns).vol;
                    return rs.map(x => ({ weight: U.rnd(effTM * x[0], u, m), originalWeight: U.rnd(effTM * x[0], u, m), reps: x[1], amrap: x[2] === '+', completed: false, failed: false, performed: null, completedAt: null, rpe: null, timeSincePrev: null, setDuration: 0 }));
                },
                chkDeload() {
                    const o = this.daysOff(), l = [[42, 25, '6+ weeks off'], [28, 20, '4 weeks off'], [14, 10, '2 weeks off']].find(x => o >= x[0]);
                    if (l && this.prefs.autoDeload) { this.deloadInfo = { needed: true, percentage: l[1], reason: l[2], protocol: 'Reduce_TMs' }; this.activeModal = 'deload'; }
                    else {
                        const fatigueDeload = this.checkFatigueDeload();
                        if (fatigueDeload && this.prefs.autoDeload) {
                            this.deloadInfo = fatigueDeload;
                            this.activeModal = 'deload';
                        } else {
                            const pd = this.checkPerformanceDeload();
                            if (pd && this.prefs.autoDeload) { this.deloadInfo = pd; this.activeModal = 'deload'; }
                            else this.activeModal = 'weight';
                        }
                    }
                },
                checkPerformanceDeload() {
                    if (this.history.length < 6) return null;
                    const l = this.session?.t1?.name || (this.getWk() ? this.getWk().t1 : 'Bench');
                    const liftHist = this.history.filter(h => h.details?.t1 === l).slice(-5);
                    if (liftHist.length < 3) return null;
                    const lastThree = liftHist.slice(-3);
                    const cf = lastThree.every(h => { const t = this.findTopAMRAP(h.setDetails?.t1); return t && t.performed != null && t.performed < t.reps; });
                    return cf ? { needed: true, percentage: 10, reason: `3 consecutive missed AMRAPs on ${l}`, protocol: 'Performance_Deload' } : null;
                },
                checkFatigueDeload() {
                    if (this.history.length < 8) return null;
                    const readiness = this.getReadinessScore();
                    const lastThree = this.history.slice(-3);
                    const allLowReadiness = lastThree.every(h => {
                        return (h.rpe || 7) >= 8.5;
                    });
                    const recoveryValues = Object.values(this.cache.recoveryMap || {});
                    const criticallyLowAreas = recoveryValues.filter(v => v < 35).length;
                    const corroboratedSystemicFatigue = (this.cache.recoveryMap?.cns ?? 100) < 30 || criticallyLowAreas >= 3;
                    if (readiness < 45 && allLowReadiness && corroboratedSystemicFatigue) {
                        return {
                            needed: true,
                            percentage: 10,
                            reason: `Sustained high fatigue detected (readiness ${readiness}%, RPE trending high)`,
                            protocol: 'Fatigue_Deload'
                        };
                    }
                    let decliningLifts = 0;
                    let totalLifts = 0;
                    Object.keys(this.tms).forEach(l => {
                        const trend = this.getE1RMTrend(l);
                        if (trend.direction !== 'flat' || (this.e1rmHistory[l] || []).length >= 3) {
                            totalLifts++;
                            if (trend.direction === 'down') decliningLifts++;
                        }
                    });
                    if (totalLifts >= 3 && decliningLifts >= M.ceil(totalLifts * 0.6)) {
                        return {
                            needed: true,
                            percentage: 10,
                            reason: `E1RM declining on ${decliningLifts}/${totalLifts} lifts — systemic fatigue likely`,
                            protocol: 'Fatigue_Deload'
                        };
                    }
                    return null;
                },
                doDeload() { Object.keys(this.tms).forEach(k => this.tms[k] = U.rnd((this.tms[k] || 0) * (1 - this.deloadInfo.percentage / 100), this.prefs.weightUnit, this.prefs.microplates)); this.save(); this.activeModal = 'weight'; },
                acceptDynamicRestSuggestion() {
                    const s = this.dynamicRestSuggestion || this.refreshDynamicRestSuggestion();
                    if (!s?.shouldRest) return this.declineDynamicRestSuggestion();
                    this.restHistory.push({
                        kind: 'dynamic_rest',
                        accepted: true,
                        timestamp: U.now(),
                        program: this.prefs.program,
                        dayIdx: this.session?.dayIdx ?? this.pIdx,
                        suggestion: s
                    });
                    if (this.restHistory.length > 120) this.restHistory = this.restHistory.slice(-120);
                    U.s('lift_rest_history', this.restHistory);
                    this.session = {};
                    this.savedSession = null;
                    this.timer.active = false;
                    U.d('lift_active_session');
                    U.d('lift_active_session_backup');
                    this.dynamicRestSuggestion = { ...s, accepted: true };
                    this.activeModal = null;
                    this.view = 'dashboard';
                    this.relWake();
                    this.$nextTick?.(() => { this.draw(); this.scrollToActive(); });
                    return this.dynamicRestSuggestion;
                },
                declineDynamicRestSuggestion() {
                    this.dynamicRestSuggestion = { ...(this.dynamicRestSuggestion || {}), accepted: false };
                    this.chkDeload();
                    return this.dynamicRestSuggestion;
                },
                async reqWake() { if (this.prefs.keepAwake && 'wakeLock' in navigator) try { this.wakeLock = await navigator.wakeLock.request('screen'); } catch { } }, relWake() { this.wakeLock?.release().catch(() => { }); this.wakeLock = null; },
                beginSession() { this.activeModal = null; this.view = 'workout'; this.reqWake(); },
                start(c, i) {
                    const d = c || this.getWk(), p = this.prefs.program; let t1s = d.s, t2s = d.t2s; if (p === 'gzclp') { t1s = 't1'; t2s = 't2'; } else if (p === 'stronglifts') { t1s = 'std'; t2s = 'std'; }
                    let idx = i ?? (c ? DATA.progs[p].days.findIndex(x => x.t1 === c.t1 && x.t === c.t) : this.pIdx); if (idx === -1) idx = null;

                    const t1BaseLift = this.baseTM(d.t1) || d.t1;
                    const t2BaseLift = this.baseTM(d.t2) || d.t2;

                    this.sessionRating = 0; this.sessionNotes = ''; this.sessionRPE = 7; this.batchAdjust = 0; this.batchAdjustTier = null; this.zenMode = false;

                    this.session = {
                        title: d.title || d.t || 'Workout',
                        start: U.now(),
                        acc: JSON.parse(JSON.stringify(d.acc || [])).map(a => ({ ...a, reps: a.reps || '10-12', originalName: a.name, selectedExercise: a.name, supersetId: null })),
                        completedAcc: {},
                        notes: '',
                        dayIdx: idx,
                        startTMs: { ...this.tms },
                        t1: {
                            name: d.t1,
                            baseLift: t1BaseLift,
                            sets: this.getSets(t1s, d.t1, this.tms[t1BaseLift], 't1')
                        },
                        t2: {
                            name: d.t2,
                            originalName: d.t2,
                            selectedExercise: d.t2,
                            baseLift: t2BaseLift,
                            schemeKey: t2s,
                            sets: this.getSets(t2s, d.t2, this.tms[t2BaseLift] || this.tms[d.t2], 't2', d.t2)
                        }
                    };
                    if (this.prefs.showPreviousWorkout) {
                        const h = this.history.slice().reverse().find(x => x.details?.t1 === d.t1);
                        if (h) this.previousWorkout = {
                            date: h.date,
                            topSet: h.details?.actualTopWeight || h.details?.weight,
                            t2TopSet: h.setDetails?.t2 ? M.max(0, ...h.setDetails.t2.filter(s => s.completed).map(s => s.weight)) : null,
                            t2Name: h.setDetails?.t2Name
                        };
                    }
                    this.showWarmups = false; this.sessionVolume = 0; this.restTimes = []; this.lastSetCompletedAt = null; this.saveSess();
                    const restSuggestion = this.refreshDynamicRestSuggestion(d);
                    if (restSuggestion?.shouldRest) this.activeModal = 'restSuggestion';
                    else this.chkDeload();
                },
                swapT2(nEx) {
                    if (!this.session.t2) return;
                    const baseLift = this.baseTM(nEx) || this.session.t2.baseLift || this.session.t2.originalName;
                    const tm = this.tms[baseLift];
                    const st = this.session.t2.sets;
                    const ns = this.getSets(this.session.t2.schemeKey, baseLift, tm, 't2', nEx);
                    ns.forEach((s, i) => {
                        if (st[i]) Object.assign(s, { completed: st[i].completed, failed: st[i].failed, performed: st[i].performed, completedAt: st[i].completedAt, rpe: st[i].rpe });
                    });
                    Object.assign(this.session.t2, { selectedExercise: nEx, name: nEx, baseLift: baseLift, sets: ns });
                    this.swapState.t2 = false; this.swapState.q = ''; this._volDirty = true; this.saveSess();
                },
                swapAcc(i, n) { if (this.session.acc?.[i]) { this.session.acc[i].selectedExercise = n; this.session.acc[i].name = n; this.swapState.acc = null; this.swapState.q = ''; this._volDirty = true; this.saveSess(); } },
                openSmartAdd() {
                    this.smartAddOptions = this.suggestAccessories();
                    this.activeModal = 'smartAdd';
                },
                suggestAccessories() {
                    const currentMuscles = new Set();
                    const sessionFatigue = {};
                    const addImpact = (n) => {
                        if (!n) return;
                        const imp = impact(n);
                        Object.entries(imp).forEach(([m, v]) => {
                            currentMuscles.add(m);
                            sessionFatigue[m] = (sessionFatigue[m] || 0) + v;
                        });
                    };
                    if (this.session?.t1) addImpact(this.session.t1.name);
                    if (this.session?.t2) addImpact(this.session.t2.selectedExercise || this.session.t2.name);
                    (this.session?.acc || []).forEach(a => addImpact(a.selectedExercise || a.name));
                    
                    const activeGroups = new Set();
                    currentMuscles.forEach(m => {
                        Object.entries(DATA.groups).forEach(([g, ms]) => {
                            if (ms.includes(m)) activeGroups.add(g);
                        });
                    });
                    
                    const scores = [];
                    Object.entries(EX_INDEX).forEach(([id, ex]) => {
                        if (this.session?.acc?.some(a => (a.selectedExercise || a.name) === id)) return;
                        let score = 0;
                        const imp = impact(id);
                        let synergy = 0;
                        Object.keys(imp).forEach(m => {
                            Object.entries(DATA.groups).forEach(([g, ms]) => {
                                if (ms.includes(m) && activeGroups.has(g)) synergy += imp[m];
                            });
                        });
                        score += synergy * 10;
                        Object.entries(imp).forEach(([m, v]) => {
                            if (sessionFatigue[m] && sessionFatigue[m] < 0.5) score += v * 15;
                            const rec = this.cache?.recoveryMap?.[m] ?? 100;
                            if (rec > 80) score += v * 5; 
                            else if (rec < 50) score -= v * 20;
                        });
                        if (score > 0) scores.push({ id, name: ex.name || id, score, mainMuscle: Object.keys(imp).reduce((a, b) => imp[a] > imp[b] ? a : b, Object.keys(imp)[0]) });
                    });
                    return scores.sort((a, b) => b.score - a.score).slice(0, 8);
                },
                addSmartAccessory(id) {
                    if (!this.session.acc) this.session.acc = [];
                    this.session.acc.push({
                        name: id,
                        originalName: id,
                        selectedExercise: id,
                        sets: 3,
                        reps: '10-15',
                        supersetId: null
                    });
                    this.activeModal = null;
                    this._volDirty = true;
                    this.saveSess();
                },
                toggleSuperset(i) { if (this.session.acc?.[i]) { this.session.acc[i].supersetId = this.session.acc[i].supersetId ? null : 'A'; this.saveSess(); } },
                getT2Alts() { const q = (this.swapState.q || '').trim().toLowerCase(), a = this.session?.t2 ? this.exAlts(this.session.t2.originalName || this.session.t2.name) : []; return !q ? a : a.filter(x => (x.name || x.id).toLowerCase().includes(q)); },
                getAccAlts(i) { const q = (this.swapState.q || '').trim().toLowerCase(), a = this.session?.acc?.[i] ? this.exAlts(this.session.acc[i].originalName || this.session.acc[i].name) : []; return !q ? a : a.filter(x => (x.name || x.id).toLowerCase().includes(q)); },
                timerStart(s, l = 'Rest') { const d = M.max(1, M.floor(+s)); this.timer = { active: true, start: U.now(), dur: d, rem: d, pct: 1, label: l, zeroCrossed: false }; this.restTimes.push({ started: U.now(), target: d }); },
                timerAdj(d) { if (this.timer.active) this.timer.dur = M.max(5, (this.timer.dur || 0) + d); },
                saveAmrap() { const v = parseInt(this.amrapState.val); if (!isNaN(v) && v >= 0) { this.amrapState.set.performed = v; this.toggleSet(this.amrapState.set, this.amrapState.tier); this.activeModal = null; } else alert("Enter a number"); },
                _setUndo(l, a) { if (this.undoState.timer) clearTimeout(this.undoState.timer); this.undoState = { visible: true, timer: setTimeout(() => { this.undoState.leaving = true; setTimeout(() => { this.undoState.visible = false; this.undoState.leaving = false; this.undoState.action = null; }, 250); }, 5000), action: a, label: l, leaving: false }; },
                doUndo() { if (this.undoState.action) { this.undoState.action(); if (this.undoState.timer) clearTimeout(this.undoState.timer); this.undoState = { visible: false, timer: null, action: null, label: '', leaving: false }; this._volDirty = true; this.saveSess(); } },
                dismissUndo() { if (this.undoState.timer) clearTimeout(this.undoState.timer); this.undoState.leaving = true; setTimeout(() => this.undoState = { visible: false, timer: null, action: null, label: '', leaving: false }, 250); },
                triggerRest(t, isF, set = null) {
                    if (this.timer.active) this.recordActualRest(t);
                    this.lastSetCompletedAt = U.now();
                    if (!this.prefs.autoStartTimer) return;
                    const exName = t === 't1' ? this.session?.t1?.name : t === 't2' ? (this.session?.t2?.selectedExercise || this.session?.t2?.name) : null;
                    const pref = +this.prefs[{ t1: 'restT1', t2: 'restT2', acc: 'restT3', t3: 'restT3' }[t]];
                    const base = this.prefs.smartRest ? this.getSmartRestDuration(t, set, exName) : pref;
                    const dur = M.min(DATA.restGuidelines.maxTimer, base + (isF ? DATA.restGuidelines.failureBonus : 0));
                    this.timerStart(dur, isF ? 'Fail Rest' : (t === 't1' ? 'T1 Rest' : t === 't2' ? 'T2 Rest' : 'Acc Rest'));
                },
                checkAutoRegulationPrompt(s, t) { if ((t === 't1' || t === 't2') && (s.rpe >= 9.5 || s.failed) && this.session?.[t]?.sets?.filter(x => !x.completed).length > 1) { this.batchAdjust = -10; this.applyBatchAdjust(t); this._setUndo('Auto-reduced weight 10%', () => { this.batchAdjust = 10; this.applyBatchAdjust(t); }); } },
                toggleSet(s, t, fail = false) {
                    if (fail) { const { failed: f, completed: c, completedAt: a } = s; s.failed = !s.failed; if (s.failed) { s.completed = true; s.completedAt = U.now(); this.triggerRest(t, true, s); this.checkAutoRegulationPrompt(s, t); this._setUndo('Set failed', () => Object.assign(s, { failed: f, completed: c, completedAt: a })); } else this._setUndo('Fail removed', () => Object.assign(s, { failed: true, completed: true, completedAt: a || U.now() })); }
                    else { if (s.amrap && (s.performed == null || s.performed === '') && !s.completed) { this.amrapState = { set: s, tier: t, val: s.reps }; this.activeModal = 'amrapInput'; this.$nextTick(() => this.$refs.amrapField?.focus()); return; } const { completed: c, failed: f, completedAt: a, timeSincePrev: ts, setDuration: sd } = s; s.completed = !s.completed; if (!s.completed) { s.failed = false; s.completedAt = null; s.timeSincePrev = null; s.setDuration = 0; this._setUndo('Set undone', () => Object.assign(s, { completed: c, failed: f, completedAt: a, timeSincePrev: ts, setDuration: sd })); } else { s.completedAt = U.now(); if (this.lastSetCompletedAt) s.timeSincePrev = M.round((U.now() - this.lastSetCompletedAt) / 1000); s.setDuration = M.round((U.now() - (this.lastSetCompletedAt || this.session.start)) / 1000); this.triggerRest(t, s.failed, s); this.checkAutoRegulationPrompt(s, t); this._setUndo('Set done', () => Object.assign(s, { completed: false, failed: false, completedAt: null, timeSincePrev: null, setDuration: 0 })); } }
                    this._volDirty = true; this.saveSess();
                },
                setSetRPE(s, r) { s.rpe = r; this.saveSess(); },
                editSet(t, idx) { const s = this.session?.[t]?.sets?.[idx]; if (!s) return; this.setEdit = { tier: t, idx, weight: U.safe(s.weight, 0), reps: U.safe(s.reps, 0), performed: s.performed ?? null, failed: !!s.failed, amrap: !!s.amrap, completed: !!s.completed, rpe: s.rpe || null }; this.activeModal = 'setEdit'; },
                saveSetEdit() { const s = this.session?.[this.setEdit.tier]?.sets?.[this.setEdit.idx]; if (!s) return; s.weight = U.rnd(U.safe(this.setEdit.weight, s.weight), this.prefs.weightUnit, this.prefs.microplates); s.reps = M.max(0, M.round(U.safe(this.setEdit.reps, s.reps))); if (s.amrap) s.performed = this.setEdit.performed == null || this.setEdit.performed === '' ? null : M.max(0, M.round(U.safe(this.setEdit.performed, 0))); const or = s.rpe; s.rpe = this.setEdit.rpe; if (s.rpe >= 9.0 && (or == null || or < 9.0) && this.timer.active && !s.failed) { this.timerAdj(45); this._setUndo('High RPE: +45s Rest', () => this.timerAdj(-45)); } s.failed = !!this.setEdit.failed; if (s.failed) { s.completed = true; s.completedAt = s.completedAt || U.now(); } this.activeModal = null; this._volDirty = true; this.saveSess(); },
                applyBatchAdjust(targetTier = null) { const tiers = targetTier ? [targetTier] : ['t1', 't2']; tiers.forEach(t => { this.session?.[t]?.sets?.forEach(x => { if (!x.completed) x.weight = U.rnd(x.weight * (1 + this.batchAdjust / 100), this.prefs.weightUnit, this.prefs.microplates); }); }); this.batchAdjust = 0; this._volDirty = true; this.saveSess(); },
                finish() { const i = this.getInc(); if (i.total > 0 && !confirm(`Incomplete: ${i.total}. Finish?`)) return; this.sessionRating = 0; this.sessionNotes = this.session.notes || ''; this.sessionRPE = 7; this.timer.active = false; this.activeModal = 'rating'; },
                getInc() { const m = [...(this.session?.t1?.sets || []), ...(this.session?.t2?.sets || [])].filter(s => !s.completed).length; let at = 0, ad = 0; (this.session?.acc || []).forEach(a => { for (let i = 1; i <= (a.sets || 0); i++) { at++; if (this.isAccDone(a.originalName || a.name, i)) ad++; } }); return { mainRemaining: m, accRemaining: M.max(0, at - ad), total: m + M.max(0, at - ad) }; },
                findTopAMRAP(s) { if (!s) return null; const a = (s || []).filter(x => x.amrap && x.completed && !x.failed && x.performed != null); return a.length ? a.reduce((b, x) => (!b || x.weight > b.weight) ? x : b, null) : null; },
                findBestCompletedSet(s) {
                    if (!s) return null;
                    const completed = (s || []).filter(x => x.completed && !x.failed && x.weight > 0);
                    if (!completed.length) return null;
                    return completed.reduce((b, x) => {
                        const e1 = U.rm(x.weight, x.performed != null ? x.performed : x.reps);
                        const e2 = b ? U.rm(b.weight, b.performed != null ? b.performed : b.reps) : 0;
                        return e1 > e2 ? x : b;
                    }, null);
                },
                _computeBestE1RMFromSets(sets) {
                    if (!sets || !Array.isArray(sets)) return 0;
                    let best = 0;
                    for (const s of sets) {
                        if (!s.completed || s.failed || s.weight <= 0) continue;
                        const reps = s.performed != null ? s.performed : s.reps;
                        if (reps <= 0) continue;
                        const e = U.rm(s.weight, reps);
                        if (e > best) best = e;
                    }
                    return best;
                },
                _getActualTopWeight(sets) {
                    if (!sets || !Array.isArray(sets)) return 0;
                    let top = 0;
                    for (const s of sets) {
                        if (s.completed && !s.failed && s.weight > top) top = s.weight;
                    }
                    return top;
                },
                _normalizeE1RMToBase(e1rm, exerciseName) {
                    const mult = this.exMult(exerciseName);
                    if (mult !== 1 && mult > 0 && e1rm > 0) {
                        return M.round(e1rm / mult);
                    }
                    return e1rm;
                },
                _deriveEffectiveTMFromSets(sets, baseLift) {
                    const bestE1RM = this._computeBestE1RMFromSets(sets);
                    if (bestE1RM <= 0) return this.tms[baseLift] || 0;
                    return bestE1RM;
                },
                _computeTrendMultiplier(lift) {
                    const liftHist = this.history.filter(h => h.details?.t1 === lift).slice(-5);
                    if (liftHist.length < 3) return 1.0;

                    const deltas = [];
                    for (const h of liftHist) {
                        const top = this.findTopAMRAP(h.setDetails?.t1);
                        if (top && top.performed != null) {
                            deltas.push(top.performed - top.reps);
                        }
                    }
                    if (deltas.length < 2) return 1.0;

                    const avgDelta = U.avg(deltas);
                    const recentDelta = deltas[deltas.length - 1];

                    if (avgDelta >= 3 && recentDelta >= 3) return 1.5;
                    if (avgDelta >= 2 && recentDelta >= 2) return 1.25;
                    if (avgDelta <= 0) return 0.75;
                    if (deltas.length >= 3) {
                        const declining = deltas.slice(-3).every((d, i, a) => i === 0 || d <= a[i - 1]);
                        if (declining && recentDelta <= 1) return 0.75;
                    }
                    return 1.0;
                },
                _recordE1RM(baseLift, e1rm, exerciseName) {
                    if (e1rm <= 0 || !baseLift) return;
                    const normE1RM = this._normalizeE1RMToBase(e1rm, exerciseName);
                    if (normE1RM <= 0) return;
                    const iso = U.iso(U.now());
                    this.e1rmHistory[baseLift] = [...(this.e1rmHistory[baseLift] || []), { e1rm: normE1RM, date: iso, timestamp: U.now() }].slice(-20);

                    if (exerciseName !== baseLift && exerciseName) {
                        this.e1rmHistory[exerciseName] = [...(this.e1rmHistory[exerciseName] || []), { e1rm: e1rm, date: iso, timestamp: U.now() }].slice(-20);
                    }
                    U.s('lift_e1rm_history', this.e1rmHistory);
                },
                _updatePR(liftName, e1rm) {
                    if (e1rm <= 0 || !liftName) return false;
                    const iso = U.iso(U.now());
                    if (e1rm > (this.prs[liftName]?.weight || 0)) {
                        this.prs[liftName] = { weight: e1rm, date: iso };
                        U.s('lift_prs', this.prs);
                        return true;
                    }
                    return false;
                },
                computeProgression(baseLift, sets, p, t = 't1') {
                    let actualTM = this.tms[baseLift] || 0;
                    let tmCorrection = 0;

                    const top = this.findTopAMRAP(sets) || sets.slice().reverse().find(s => s.completed && !s.failed);
                    if (top && top.originalWeight && top.weight !== top.originalWeight && top.weight > 0 && top.originalWeight > 0 && actualTM > 0) {
                        const ratio = top.weight / top.originalWeight;
                        const impliedTM = actualTM * ratio;
                        tmCorrection = impliedTM - actualTM;
                        actualTM = impliedTM;
                    }

                    const ctx = {
                        tier: t,
                        lift: baseLift,
                        sets: sets,
                        tm: actualTM,
                        top: this.findTopAMRAP(sets),
                        all: sets.every(x => x.completed && !x.failed),
                        u: this.prefs.weightUnit,
                        hist: this.history,
                        state: this.state,
                        wk: this.week,
                        cycleWeek: this.cycleWeek531,
                        findTop: st => this.findTopAMRAP(st)
                    };

                    const progKey = DATA.progs[p]?.prog || p;
                    const fn = PROG[progKey] || PROG[p] || PROG.linear;
                    const res = fn(ctx);

                    let finalAdd = tmCorrection + res.add;

                    if (finalAdd !== 0) {
                        this.tms[baseLift] = U.rnd(actualTM + res.add, ctx.u, this.prefs.microplates);
                    }

                    return { add: finalAdd, method: tmCorrection !== 0 ? res.method + '_adj' : res.method };
                },
                _estimateAccessoryWeight(name) {
                    const isC = DATA.compoundAccessories.has(name);
                    if (!isC) return 45;
                    const tmVals = Object.values(this.tms).filter(v => v > 0);
                    const avgTM = tmVals.length ? U.avg(tmVals) : 135;
                    return M.round(avgTM * 0.45);
                },
                saveFinish() {
                    this._finishing = true;
                    const { t1, t2 } = this.session;
                    const t1Name = t1.name;
                    const t1BaseLift = t1.baseLift || this.baseTM(t1Name) || t1Name;
                    const p = this.prefs.program;

                    const t1ActualTopWeight = this._getActualTopWeight(t1.sets);
                    const t1BestE1RM = this._computeBestE1RMFromSets(t1.sets);
                    const t1NormE1RM = this._normalizeE1RMToBase(t1BestE1RM, t1Name);

                    this._recordE1RM(t1BaseLift, t1BestE1RM, t1Name);

                    const preTM_t1 = this.tms[t1BaseLift] || 0;
                    const prg = this.computeProgression(t1BaseLift, t1.sets, p, 't1');
                    const postTM_t1 = this.tms[t1BaseLift] || 0;

                    const t2Name = t2.selectedExercise || t2.name;
                    const t2OrigName = t2.originalName || t2Name;
                    const t2BaseLift = t2.baseLift || this.baseTM(t2OrigName) || t2OrigName;

                    const t2ActualTopWeight = this._getActualTopWeight(t2.sets);
                    const t2BestE1RM = this._computeBestE1RMFromSets(t2.sets);
                    const t2NormE1RM = this._normalizeE1RMToBase(t2BestE1RM, t2Name);

                    this._recordE1RM(t2BaseLift, t2BestE1RM, t2Name);

                    let t2Prg = { add: 0, method: 'no_change' };
                    if (this.tms[t2BaseLift] !== undefined && t2BaseLift !== t1BaseLift) {
                        t2Prg = this.computeProgression(t2BaseLift, t2.sets, p, 't2');
                    }
                    const postTM_t2 = this.tms[t2BaseLift] || 0;

                    const t1PR = this._updatePR(t1BaseLift, t1NormE1RM);
                    if (t1Name !== t1BaseLift) {
                        this._updatePR(t1Name, t1BestE1RM);
                    }

                    const t2PR = this._updatePR(t2BaseLift, t2NormE1RM);
                    if (t2Name !== t2BaseLift) {
                        this._updatePR(t2Name, t2BestE1RM);
                    }

                    const isNewPR = t1PR || prg.add > 0;
                    const iso = U.iso(U.now());

                    try { if ((prg.add > 0 || t1PR) && typeof confetti === 'function') confetti({ particleCount: 100, spread: 70, origin: { y: .6 } }); } catch(e){}

                    const all = [...t1.sets, ...t2.sets];
                    const mainVol = U.vol(all);
                    let accVol = 0;
                    (this.session.acc || []).forEach(a => { const cc = Object.keys(this.session.completedAcc).filter(k => k.startsWith((a.originalName || a.name) + '-')).length; accVol += cc * U.prs(a.reps) * this._estimateAccessoryWeight(a.selectedExercise || a.name); });
                    const vol = mainVol + accVol, rCount = all.filter(s => s.completed && s.rpe).length, rSum = all.reduce((a, s) => s.completed && s.rpe ? a + s.rpe : a, 0);
                    const avgVol = this.history.length ? U.sum(this.history, 'totalVolume') / this.history.length : vol, scr = M.min(100, M.round(((vol / (avgVol || 1)) * 40) + (((rCount ? rSum / rCount : 7) / 10) * 60))), dur = M.max(60, (U.now() - this.session.start) / 1000), wJ = M.round(vol * 9.8 * .5), pW = M.round(wJ / dur);
                    this.xp += M.round(scr * 5 + (wJ / 150)); U.s('lift_xp', this.xp);

                    let aN = [];
                    this.session.acc.forEach(a => { const cc = Object.keys(this.session.completedAcc).filter(k => k.startsWith((a.originalName || a.name) + '-')).length; if (cc >= a.sets && a.reps) aN.push(`+ Consider upping weight on ${a.selectedExercise || a.originalName || a.name}`); });

                    const volWarnings = this.getVolumeLandmarkWarnings();
                    if (volWarnings.length) {
                        aN.push('--- Volume Alerts ---');
                        volWarnings.forEach(w => aN.push(w));
                    }

                    if (aN.length) this.sessionNotes = (this.sessionNotes ? this.sessionNotes + '\n' : '') + aN.join('\n');

                    const effVol = all.reduce((a, s) => {
                        if (!s.completed) return a;
                        const reps = s.performed != null ? s.performed : (s.reps || 0);
                        return a + U.fatigue(s.weight, reps, postTM_t1 || preTM_t1 || 0, s.failed, this.sessionRPE ?? 7);
                    }, 0);

                    const amrapSet = this.findTopAMRAP(t1.sets);

                    this.history.push({
                        date: new D().toLocaleDateString(), isoDate: iso, timestamp: U.now(), title: this.session.title,
                        increase: prg.add, pr: isNewPR, progressionMethod: prg.method,
                        duration: M.round(dur / 60), rating: this.sessionRating, rpe: this.sessionRPE ?? 7,
                        notes: this.sessionNotes, totalVolume: vol, intensityScore: scr, workJoules: wJ, powerWatts: pW, t2PR,
                        effectiveVolume: effVol, totalSets: all.length, completedSets: all.filter(s => s.completed).length,
                        avgRestTime: this.restTimes.length ? M.round(U.avg(this.restTimes.map(r => r.target))) : null,
                        avgActualRest: (() => { const wr = all.filter(s => s.timeSincePrev); return wr.length ? M.round(U.avg(wr.map(s => s.timeSincePrev))) : null; })(),
                        details: {
                            t1: t1BaseLift,
                            t1Variant: t1Name !== t1BaseLift ? t1Name : undefined,
                            weight: amrapSet ? amrapSet.weight : t1ActualTopWeight,
                            actualTopWeight: t1ActualTopWeight,
                            est1rm: t1NormE1RM,
                            rawE1rm: t1BestE1RM,
                            preTM: preTM_t1,
                            tm: postTM_t1,
                            tmDelta: prg.add
                        },
                        setDetails: {
                            t1: t1.sets,
                            t2Name: t2Name,
                            t2OriginalName: t2OrigName,
                            t2BaseLift: t2BaseLift,
                            t2: t2.sets,
                            t2ActualTopWeight: t2ActualTopWeight,
                            t2Est1rm: t2NormE1RM,
                            t2RawE1rm: t2BestE1RM,
                            t2PreTM: this.session.startTMs?.[t2BaseLift] || 0,
                            t2PostTM: postTM_t2,
                            t2TmDelta: t2Prg.add,
                            accessories: this.session.acc.map(a => ({
                                name: a.selectedExercise || a.name, originalName: a.originalName, total: a.sets, reps: a.reps,
                                completed: Object.keys(this.session.completedAcc).filter(k => k.startsWith((a.originalName || a.name) + '-')).length
                            }))
                        },
                        avgSetDuration: M.round(U.avg(all.filter(s => s.setDuration).map(s => s.setDuration))),
                        trendMultiplier: this._computeTrendMultiplier(t1BaseLift),
                        startTMs: this.session.startTMs ? { ...this.session.startTMs } : undefined
                    });

                    if (this.history.length > 500) this.history = this.history.slice(-500);

                    if (this.session.dayIdx !== null && this.session.dayIdx !== undefined) {
                        this.idx = (this.session.dayIdx + 1) % DATA.progs[p].days.length;
                        if (this.idx === 0) this.week++;
                        if (p === '531' && this.session.dayIdx === DATA.progs['531'].days.length - 1) this.cycleWeek531++;
                        this.pIdx = this.idx;
                    }
                    this.computeStreak(); this.computeLongestStreak(); this.computeFrequency();
                    this.session = {}; this.savedSession = null; this._finishing = false;
                    U.d('lift_active_session'); U.d('lift_active_session_backup');
                    this.activeModal = null; this.save(); this.chkAch();
                    this.view = 'dashboard'; this.calBuild();
                    this.$nextTick(() => { this.draw(); this.scrollToActive(); });
                },
                warmups() {
                    if (!this.session?.t1?.sets?.[0]) return [];
                    const w = this.session.t1.sets[0].weight, b = this.prefs.barWeight;
                    const raw = [{ w: b, r: 10 }, ...(this.prefs.warmupSteps || [40, 55, 75]).map(p => ({ w: U.rnd(w * (p / 100), this.prefs.weightUnit, this.prefs.microplates), r: p < 50 ? 5 : p < 70 ? 3 : 2 }))].filter(x => x.w >= b);
                    const seen = new Set(), deduped = [];
                    for (const s of raw) { if (!seen.has(s.w)) { seen.add(s.w); deduped.push(s); } }
                    return deduped;
                },
                calcPlates(w) { this.plate.open = true; this.plate.w = w; this.plate.plates = plateLoadForSide((w - this.prefs.barWeight) / 2, this.prefs.weightUnit); },
                openSmartPlateCalc() { let s = (this.session?.t1?.sets || []).find(x => !x.completed) || (this.session?.t2?.sets || []).find(x => !x.completed) || (this.session?.t1?.sets || []).slice(-1)[0]; if (s) this.calcPlates(s.weight); else this.plate.open = true; },
                closestWeight(w) { const b = this.prefs.barWeight; let r = (w - b) / 2, t = b; plateInventory(this.prefs.weightUnit).forEach(p => { while (r >= p) { t += p * 2; r -= p; } }); return t; },
                computeSessionVolume() {
                    let v = U.vol([...(this.session?.t1?.sets || []), ...(this.session?.t2?.sets || [])]);
                    (this.session?.acc || []).forEach(a => { const cc = Object.keys(this.session?.completedAcc || {}).filter(k => k.startsWith((a.originalName || a.name) + '-')).length; v += cc * U.prs(a.reps) * this._estimateAccessoryWeight(a.selectedExercise || a.name); });
                    this.sessionVolume = v;
                },
                estimateTimeRemaining() { if (!this.session?.t1?.sets) return 0; const r = [...(this.session.t1?.sets || []), ...(this.session.t2?.sets || [])].filter(s => !s.completed).length, a = (this.session.acc || []).reduce((x, i) => x + M.max(0, i.sets - Object.keys(this.session.completedAcc || {}).filter(k => k.startsWith((i.originalName || i.name) + '-')).length), 0), avgRest = this.restTimes.length ? U.avg(this.restTimes.map(x => x.target)) : (parseInt(this.prefs.restT1) || 180); return M.round(((r + a) * (avgRest + 45)) / 60); },
                handleSwipeStart(e, t, i) { if (!this.prefs.swipeToComplete) return; this.swipeData = { startX: (e.touches ? e.touches[0] : e).clientX, startY: (e.touches ? e.touches[0] : e).clientY, dx: 0, active: true, tier: t, idx: i }; },
                handleSwipeMove(e) { if (!this.swipeData.active) return; const dx = (e.touches ? e.touches[0] : e).clientX - this.swipeData.startX; if (M.abs(dx) > 10) { e.preventDefault(); this.swipeData.dx = dx; } },
                handleSwipeEnd() { if (this.swipeData.active) { const { dx, tier: t, idx: i } = this.swipeData, s = this.session?.[t]?.sets?.[i]; if (s) { if (dx > 60 && !s.completed) this.toggleSet(s, t, false); else if (dx < -60 && !s.failed) this.toggleSet(s, t, true); } } this.swipeData = { startX: 0, startY: 0, dx: 0, active: false, tier: null, idx: null }; },
                getSwipeTransform(t, i) { return this.swipeData.active && this.swipeData.tier === t && this.swipeData.idx === i ? `transform:translateX(${M.max(-80, M.min(80, this.swipeData.dx))}px)` : ''; },
                getSwipeBgOpacity(t, i, d) { if (!this.swipeData.active || this.swipeData.tier !== t || this.swipeData.idx !== i) return 'opacity:0'; const dx = this.swipeData.dx; return (d === 'right' && dx > 20) ? `opacity:${M.min(1, dx / 80)}` : (d === 'left' && dx < -20) ? `opacity:${M.min(1, M.abs(dx) / 80)}` : 'opacity:0'; },
                draw() {
                    const chartEntries = this.history.filter(h => h.details?.t1 === this.chartLift);
                    upChrt('mainChart', 'line', {
                        l: chartEntries.map(x => x.date),
                        d: chartEntries.map(x => x.details?.tm || 0)
                    }, '#6366f1');
                    const bw = getBodyweightSeries(this.bwLog);
                    upChrt('bodyWeightChart', 'line', { l: bw.labels, d: bw.values }, '#3b82f6');
                    const v = {}, now = new D(); this.history.slice(-20).forEach(h => { const ts = new D(h.timestamp), ys = new D(ts.getFullYear(), 0, 1), wn = M.ceil((M.floor((ts - ys) / 864e5) + ys.getDay() + 1) / 7), k = ts.getFullYear() === now.getFullYear() ? `W${wn}` : `${ts.getFullYear()}-W${wn}`; v[k] = (v[k] || 0) + (h.totalVolume || 0); });
                    upChrt('volumeChart', 'bar', { l: Object.keys(v), d: Object.values(v) }, '#10b981', false);
                    upChrt('balanceChart', 'radar', { l: ['Push', 'Pull', 'Legs', 'Core'], d: [this.cache.mgVol.Push, this.cache.mgVol.Pull, this.cache.mgVol.Legs, this.cache.mgVol.Core] }, '#6366f1', true);
                },
                drawPRCharts() {
                    const bw = getBodyweightSeries(this.bwLog);
                    upChrt('bodyWeightChart', 'line', { l: bw.labels, d: bw.values }, '#3b82f6');
                    Object.keys(this.prs).forEach(l => {
                        const e = (this.e1rmHistory[l] || []).slice(-15);
                        if (e.length) upChrt('pr_' + l.replace(/\s+/g, '_'), 'line', { l: e.map(x => x.date), d: e.map(x => x.e1rm) }, '#6366f1');
                    });
                },
                updCache() {
                    const f = {}, now = U.now(), mg = { Push: 0, Pull: 0, Legs: 0, Core: 0 }, pS = DATA.programCapacityScale[this.prefs.program] || 1;
                    const FATIGUE_LOOKBACK_HOURS = 504;
                    const UTILIZATION_LOOKBACK_HOURS = 720;
                    const MIN_DECAY = 0.005;
                    const lastTrainedAge = {}, primedMap = {};
                    const allW = [...this.history]; if (this.session?.start && this.session?.t1) allW.push({ timestamp: this.session.start, rpe: this.sessionRPE, details: { t1: this.session.t1?.baseLift || this.session.t1?.name, t1Variant: this.session.t1?.name }, setDetails: { t1: this.session.t1?.sets, t2Name: this.session.t2?.selectedExercise || this.session.t2?.name, t2: this.session.t2?.sets, accessories: this.session.acc?.map(a => ({ name: a.selectedExercise || a.name, originalName: a.originalName, total: a.sets, reps: a.reps, completed: Object.keys(this.session.completedAcc || {}).filter(k => k.startsWith((a.originalName || a.name) + '-')).length })) } });
                    allW.sort((a, b) => historyTimestamp(a) - historyTimestamp(b));
                    for (let i = allW.length - 1; i >= 0; i--) {
                        const w = allW[i], timestamp = historyTimestamp(w);
                        if (!timestamp || timestamp > now + 36e5) continue;
                        const age = M.max(0, (now - timestamp) / 36e5); if (age >= UTILIZATION_LOOKBACK_HOURS) break;
                        const wRPE = w.rpe || 7;
                        const procSets = (n, sets) => {
                            if (!n || !Array.isArray(sets)) return 0;
                            const normalizedName = normalizeExerciseName(n) || n;
                            const imp_map = impact(normalizedName), bLift = this.baseTM(normalizedName) || normalizedName, tm = this.tms[bLift] || 0;
                            let completed = 0;
                            sets.forEach(s => {
                                if (!s.completed) return;
                                completed++;
                                const reps = s.performed != null ? s.performed : (s.reps || 0), wt = s.weight || 0;
                                const effort = 1 + M.max(0, wRPE - 7) * .1 + (s.failed ? .15 : 0);
                                const gi = ms => { const load = M.max(0, ...ms.map(m => imp_map[m] || 0)); return load >= .3 ? effort * M.min(1, load) : 0; };
                                mg.Push += gi(DATA.groups.Push); mg.Pull += gi(DATA.groups.Pull); mg.Legs += gi(DATA.groups.Legs); mg.Core += gi(DATA.groups.Core);
                                if (wt <= 0 || reps <= 0) return;
                                const setFat = U.fatigue(wt, reps, tm, s.failed, wRPE);
                                Object.entries(imp_map).forEach(([k, v]) => {
                                    const decay = M.pow(.5, age / (DATA.halfLife[k] || 36));
                                    if (age < FATIGUE_LOOKBACK_HOURS && decay >= MIN_DECAY) { f[k] = (f[k] || 0) + setFat * v * decay; }
                                    if (age < FATIGUE_LOOKBACK_HOURS && v >= 0.3 && (lastTrainedAge[k] === undefined || age < lastTrainedAge[k])) {
                                        lastTrainedAge[k] = age;
                                    }
                                });
                            });
                            return completed;
                        };
                        const procAcc = (a) => {
                            if (!a || !a.name || !a.completed) return;
                            const imp_map = impact(a.name), isC = DATA.compoundAccessories.has(a.name), reps = U.prs(a.reps), cc = a.completed || 0;
                            if (cc <= 0) return;
                            const gi = ms => { const load = M.max(0, ...ms.map(m => imp_map[m] || 0)); return load >= .3 ? cc * .75 * M.min(1, load) : 0; };
                            mg.Push += gi(DATA.groups.Push); mg.Pull += gi(DATA.groups.Pull); mg.Legs += gi(DATA.groups.Legs); mg.Core += gi(DATA.groups.Core);
                            const accFat = cc * reps * (isC ? .4 : .2);
                            Object.entries(imp_map).forEach(([k, v]) => {
                                const decay = M.pow(.5, age / (DATA.halfLife[k] || 36));
                                if (age < FATIGUE_LOOKBACK_HOURS && decay >= MIN_DECAY) { f[k] = (f[k] || 0) + accFat * v * decay; }
                                if (age < FATIGUE_LOOKBACK_HOURS && v >= 0.3 && (lastTrainedAge[k] === undefined || age < lastTrainedAge[k])) {
                                    lastTrainedAge[k] = age;
                                }
                            });
                        };
                        const t1Name = w.details?.t1Variant || w.details?.t1 || normalizeExerciseName(w.lift || w.exercise || w.title);
                        const t1Completed = procSets(t1Name, w.setDetails?.t1);
                        const t2Completed = procSets(w.setDetails?.t2Name || w.setDetails?.t2BaseLift, w.setDetails?.t2);
                        (w.setDetails?.accessories || []).forEach(procAcc);

                        // Older synced logs can contain only the history-card summary. Keep those sessions
                        // visible in utilization/recovery without fabricating exact set rows.
                        if (!t1Completed && !t2Completed && t1Name) {
                            const imp_map = impact(t1Name);
                            const tm = this.tms[this.baseTM(t1Name) || t1Name] || Number(w.details?.tm) || 0;
                            const storedSets = Number(w.completedSets || w.totalSets);
                            const volumeEstimate = tm > 0 && Number(w.totalVolume) > 0 ? Number(w.totalVolume) / (tm * .75 * 5) : 0;
                            const setCount = M.max(1, M.min(20, M.round(storedSets > 0 ? storedSets : volumeEstimate > 0 ? volumeEstimate : 1)));
                            const gi = ms => { const load = M.max(0, ...ms.map(m => imp_map[m] || 0)); return load >= .3 ? setCount * M.min(1, load) : 0; };
                            mg.Push += gi(DATA.groups.Push); mg.Pull += gi(DATA.groups.Pull); mg.Legs += gi(DATA.groups.Legs); mg.Core += gi(DATA.groups.Core);
                            if (age < FATIGUE_LOOKBACK_HOURS) {
                                const estimatedSetFatigue = U.fatigue(tm > 0 ? tm * .75 : 1, 5, tm, false, wRPE);
                                Object.entries(imp_map).forEach(([k, v]) => {
                                    const decay = M.pow(.5, age / (DATA.halfLife[k] || 36));
                                    if (decay >= MIN_DECAY) f[k] = (f[k] || 0) + estimatedSetFatigue * setCount * v * decay;
                                    if (v >= .3 && (lastTrainedAge[k] === undefined || age < lastTrainedAge[k])) lastTrainedAge[k] = age;
                                });
                            }
                        }
                    }

                    const lb = 1 + M.min(.50, this.currentLevel * .02), rm = {};
                    Object.keys(DATA.halfLife).forEach(m => {
                        const cap = (DATA.baseRecoveryCapacity[m] || 90) * lb * pS;
                        const fatigue = f[m] || 0;
                        if (fatigue <= 0 && lastTrainedAge[m] === undefined) {
                            rm[m] = 100;
                            return;
                        }
                        // Zero residual fatigue must converge to 100. The old sigmoid plateaued near 92
                        // for three weeks after any session, creating chronic false fatigue warnings.
                        const baseRecovery = M.round(100 * M.exp(-fatigue / cap));

                        const sc = DATA.supercompensation[m];
                        const ageHrs = lastTrainedAge[m];
                        if (sc && ageHrs !== undefined && baseRecovery >= 85) {
                            const distFromPeak = M.abs(ageHrs - sc.peakHours);
                            if (distFromPeak <= sc.windowHours) {
                                primedMap[m] = true;
                                rm[m] = M.min(100, baseRecovery);
                            } else {
                                rm[m] = M.max(0, M.min(100, baseRecovery));
                            }
                        } else {
                            rm[m] = M.max(0, M.min(100, baseRecovery));
                        }
                    });

                    const cM = .90 + .10 * ((rm.cns ?? 100) / 100);
                    this.cache.recovery = Object.entries(DATA.groups).map(([n, ms]) => {
                        const vs = ms.map(m => {
                            let r = rm[m] ?? 100;
                            if (n !== 'CNS' && !DATA.isolationDominant.has(m)) r = M.round(r * cM);
                            return M.max(0, M.min(100, r));
                        });
                        const min = M.min(...vs);
                        const avg = M.round(U.avg(vs));
                        const hasSupercomp = ms.some(m => primedMap[m]);
                        return {
                            name: n,
                            recovery: avg,
                            min,
                            status: hasSupercomp ? 'Primed' : min >= 80 ? 'Ready' : min >= 40 ? 'Recovering' : 'Fatigued',
                            muscles: ms.map(m => ({
                                name: m,
                                recovery: n === 'CNS' ? (rm[m] ?? 100) : (DATA.isolationDominant.has(m) ? (rm[m] ?? 100) : M.max(0, M.min(100, M.round((rm[m] ?? 100) * cM)))),
                                supercompensating: !!primedMap[m]
                            }))
                        };
                    });
                    this.cache.recoveryMap = {}; Object.keys(DATA.halfLife).forEach(m => {
                        this.cache.recoveryMap[m] = m === 'cns' ? (rm[m] ?? 100) : (DATA.isolationDominant.has(m) ? (rm[m] ?? 100) : M.max(0, M.min(100, M.round((rm[m] ?? 100) * cM))));
                    });
                    this.cache.mgVol = mg;

                    this._computeVolumeLandmarks();
                },

                _computeVolumeLandmarks() {
                    const now = U.now();
                    const landmarks = {};
                    Object.keys(DATA.volumeLandmarks).forEach(muscle => {
                        const weekSets = U.weeklyEffectiveSets(this.history, muscle, now);
                        const lm = DATA.volumeLandmarks[muscle];
                        let status = 'optimal';
                        let message = '';
                        if (weekSets < lm.mev) {
                            status = 'below_mev';
                            message = `Below MEV (${weekSets.toFixed(1)}/${lm.mev} sets)`;
                        } else if (weekSets > lm.mrv) {
                            status = 'above_mrv';
                            message = `Exceeding MRV! (${weekSets.toFixed(1)}/${lm.mrv} sets)`;
                        } else if (weekSets > lm.mav) {
                            status = 'above_mav';
                            message = `Above MAV (${weekSets.toFixed(1)}/${lm.mav} sets)`;
                        } else if (weekSets >= lm.mev && weekSets <= lm.mav) {
                            status = 'optimal';
                            message = `Optimal (${weekSets.toFixed(1)} sets)`;
                        }
                        landmarks[muscle] = { sets: weekSets, ...lm, status, message };
                    });
                    this.cache.volumeLandmarks = landmarks;
                },

                getVolumeLandmarkWarnings() {
                    const warnings = [];
                    const lm = this.cache.volumeLandmarks || {};
                    Object.entries(lm).forEach(([muscle, data]) => {
                        if (data.status === 'above_mrv') {
                            warnings.push(`Warning: ${muscle}: ${data.message} — reduce volume to recover`);
                        } else if (data.status === 'below_mev' && data.sets > 0) {
                            warnings.push(`${muscle}: ${data.message} — add sets for growth`);
                        }
                    });
                    return warnings;
                },

                getVolumeStatus(muscle) {
                    return this.cache.volumeLandmarks?.[muscle] || null;
                },

                getReadinessScore() { const v = Object.values(this.cache.recoveryMap || {}); return v.length ? M.round(U.avg(v)) : 100; },
                getRecoveryAdvice() {
                    const fa = [];
                    const chk = n => { if (!n) return; Object.keys(impact(n)).forEach(m => { if ((this.cache.recoveryMap?.[m] ?? 100) < 50 && !fa.includes(m)) fa.push(m); }); };
                    if (this.session?.t1) chk(this.session.t1.name);
                    if (this.session?.t2) chk(this.session.t2.selectedExercise || this.session.t2.name);

                    const volWarnings = this.getVolumeLandmarkWarnings();

                    const primedMuscles = [];
                    (this.cache.recovery || []).forEach(group => (group.muscles || []).forEach(m => {
                        if (m.supercompensating && !primedMuscles.includes(m.name)) primedMuscles.push(m.name);
                    }));

                    const systemic = this.cache.recoveryMap?.cns ?? 100;
                    if (systemic < 25) {
                        return { muscles: fa, suggestion: 'Systemic readiness is very low — rest or use a recovery session today', cnsWarning: true, severe: true, volumeWarnings: volWarnings, primedMuscles };
                    }
                    const severelyFatiguedTargets = fa.filter(m => (this.cache.recoveryMap?.[m] ?? 100) < 35);
                    if (severelyFatiguedTargets.length) {
                        return { muscles: fa, suggestion: 'Target muscles are very under-recovered — postpone heavy work or use a recovery session', severe: true, volumeWarnings: volWarnings, primedMuscles };
                    }
                    if (systemic < 45) {
                        return { muscles: fa, suggestion: 'Systemic readiness is reduced — train, but keep top sets submaximal if warm-ups feel slow', cnsWarning: true, systemicCaution: true, volumeWarnings: volWarnings, primedMuscles };
                    }
                    if (fa.length) {
                        return { muscles: fa, suggestion: 'Reduce volume on fatigued muscles', volumeWarnings: volWarnings, primedMuscles };
                    }
                    if (primedMuscles.length > 0) {
                        return { muscles: [], suggestion: `Supercompensation window open for: ${primedMuscles.join(', ')} — ideal time to train!`, volumeWarnings: volWarnings, primedMuscles, primed: true };
                    }
                    if (volWarnings.length) {
                        return { muscles: [], suggestion: 'Volume adjustments recommended', volumeWarnings: volWarnings, primedMuscles };
                    }
                    return null;
                },
                computeLongestStreak() { if (!this.history.length) return this.longestStreak = 0; const dpw = DATA.progs[this.prefs.program]?.daysPerWeek || 3; const maxGap = M.max(2, M.ceil(7 / dpw) + 1); const d = [...new Set(this.history.map(h => h.isoDate))].sort(); let l = 1, c = 1; for (let i = 1; i < d.length; i++) { if ((new D(d[i]) - new D(d[i - 1])) / 864e5 <= maxGap) { c++; l = M.max(l, c); } else c = 1; } this.longestStreak = l; },
                computeFrequency() { const n = U.now(), f = {}; Object.entries({ '7d': 7, '14d': 14, '30d': 30 }).forEach(([l, d]) => { const ws = this.history.filter(h => h.timestamp >= n - d * 864e5), mh = {}; ws.forEach(x => Object.keys(impact(x.details?.t1) || {}).forEach(m => mh[m] = (mh[m] || 0) + 1)); f[l] = { total: ws.length, perWeek: M.round(ws.length / (d / 7) * 10) / 10, muscleHits: mh }; }); this.freqData = f; },
                saveTemplate() { if (this.templateName.trim()) { this.templates.push({ name: this.templateName.trim(), created: U.now(), t1: this.session.t1?.name, t2: this.session.t2.originalName || this.session.t2.name, t2Selected: this.session.t2.selectedExercise || this.session.t2.name, acc: this.session.acc?.map(a => ({ name: a.originalName || a.name, selectedExercise: a.selectedExercise || a.name, sets: a.sets, reps: a.reps })) }); U.s('lift_templates', this.templates); this.templateName = ''; this.activeModal = null; } },
                startFromTemplate(t) { this.start({ title: t.name, t1: t.t1, t2: t.t2, s: 'vol', t2s: 't2', acc: t.acc }); }, deleteTemplate(i) { this.templates.splice(i, 1); U.s('lift_templates', this.templates); },
                openExNote(n) { this.exNoteTarget = n; this.exNoteText = this.exerciseNotes[n] || ''; this.activeModal = 'exNote'; }, saveExNote() { if (this.exNoteText.trim()) this.exerciseNotes[this.exNoteTarget] = this.exNoteText.trim(); else delete this.exerciseNotes[this.exNoteTarget]; U.s('lift_exercise_notes', this.exerciseNotes); this.activeModal = null; }, getExNote(n) { return this.exerciseNotes[n] || null; },
                calBuild() {
                    const n = new D();
                    n.setMonth(n.getMonth() + this.cal.offset);
                    this.cal.monthName = n.toLocaleString('default', { month: 'long', year: 'numeric' });
                    const y = n.getFullYear(), m = n.getMonth(), ld = {};
                    this.history.forEach(h => {
                        const timestamp = historyTimestamp(h);
                        if (!timestamp) return;
                        const k = U.iso(timestamp);
                        if (!ld[k]) ld[k] = { vol: 0, logs: [] };
                        ld[k].vol += (h.totalVolume || 1);
                        ld[k].logs.push(h);
                    });
                    const maxV = M.max(1, ...Object.values(ld).map(x => x.vol));
                    this.cal.days = [
                        ...Array(new D(y, m, 1).getDay()).fill({}),
                        ...Array.from({ length: new D(y, m + 1, 0).getDate() }, (_, i) => {
                            const dd = ld[U.iso(new D(y, m, i + 1).getTime())];
                            const v = dd ? dd.vol : 0;
                            return { num: i + 1, isToday: new D().getDate() === i + 1 && !this.cal.offset, hasLog: v > 0, intensity: v > 0 ? M.ceil((v / maxV) * 3) : 0, logs: dd ? dd.logs : [] };
                        })
                    ];
                    const w = this.history.filter(h => {
                        const timestamp = historyTimestamp(h);
                        if (!timestamp) return false;
                        const date = new D(timestamp);
                        return date.getFullYear() === y && date.getMonth() === m;
                    });
                    this.calSummary = { count: w.length, totalVol: U.sum(w, 'totalVolume'), avgDur: w.length ? M.round(U.avg(w.map(x => x.duration))) : 0, prs: w.filter(h => h.pr || h.t2PR).length };
                }, calDayClass(d) { return !d.hasLog ? '' : this.prefs.heatmapCalendar ? (d.intensity >= 3 ? 'cal-hot3' : d.intensity >= 2 ? 'cal-hot2' : 'cal-hot1') : 'cal-active'; },
                chkAch() { ACHIEVEMENTS.forEach(a => { if (!this.achievements.includes(a.id) && a.check(this.history, this.streak, this)) { this.achievements.push(a.id); this.currentAchievement = a; this.activeModal = 'achievement'; U.s('lift_achievements', this.achievements); } }); },
                _saveSessionOnly() { if (this.session?.start) U.s('lift_active_session', this.session); },
                saveSess() {
                    if (this.session?.start) {
                        U.s('lift_active_session', this.session);
                        if (this._cacheDebounce) clearTimeout(this._cacheDebounce);
                        this._cacheDebounce = setTimeout(() => this.updCache(), 200);
                    }
                },
                save() { U.s('nsuns_ultimate', { tms: this.tms, history: this.history, idx: this.idx, week: this.week, cycleWeek531: this.cycleWeek531, streak: this.streak, state: this.state }); if (this._cacheDebounce) clearTimeout(this._cacheDebounce); this._cacheDebounce = setTimeout(() => { this.updCache(); if (this.view === 'dashboard') this.$nextTick?.(() => this.draw()); }, 200); }, savePrefs() { this.prefs = mergePrefs(this.prefs); this.applyTheme(); U.s('lift_preferences', this.prefs); },
                togUnit(u) {
                    if (u !== this.prefs.weightUnit && confirm(`Convert all weights to ${u}?`)) {
                        const f = this.prefs.weightUnit;
                        const backup = { tms: J.parse(J.stringify(this.tms)), prs: J.parse(J.stringify(this.prs)), e1rmHistory: J.parse(J.stringify(this.e1rmHistory)), bwLog: J.parse(J.stringify(this.bwLog)), history: J.parse(J.stringify(this.history)) };
                        try {
                            Object.keys(this.tms).forEach(k => this.tms[k] = U.rnd(U.conv(this.tms[k], f, u), u, this.prefs.microplates));
                            Object.keys(this.prs).forEach(k => { if (this.prs[k]) this.prs[k].weight = M.round(U.conv(this.prs[k].weight, f, u)); });
                            this.history.forEach(h => {
                                if (h.details) {
                                    if (h.details.weight) h.details.weight = M.round(U.conv(h.details.weight, f, u));
                                    if (h.details.actualTopWeight) h.details.actualTopWeight = M.round(U.conv(h.details.actualTopWeight, f, u));
                                    if (h.details.est1rm) h.details.est1rm = M.round(U.conv(h.details.est1rm, f, u));
                                    if (h.details.rawE1rm) h.details.rawE1rm = M.round(U.conv(h.details.rawE1rm, f, u));
                                    if (h.details.tm) h.details.tm = U.rnd(U.conv(h.details.tm, f, u), u, false);
                                    if (h.details.preTM) h.details.preTM = U.rnd(U.conv(h.details.preTM, f, u), u, false);
                                    if (h.details.tmDelta) h.details.tmDelta = U.rnd(U.conv(h.details.tmDelta, f, u), u, false);
                                }
                                if (h.setDetails?.t1) h.setDetails.t1.forEach(s => { if (s.weight) s.weight = U.rnd(U.conv(s.weight, f, u), u, false); });
                                if (h.setDetails?.t2) h.setDetails.t2.forEach(s => { if (s.weight) s.weight = U.rnd(U.conv(s.weight, f, u), u, false); });
                                if (h.setDetails) {
                                    if (h.setDetails.t2ActualTopWeight) h.setDetails.t2ActualTopWeight = M.round(U.conv(h.setDetails.t2ActualTopWeight, f, u));
                                    if (h.setDetails.t2Est1rm) h.setDetails.t2Est1rm = M.round(U.conv(h.setDetails.t2Est1rm, f, u));
                                    if (h.setDetails.t2RawE1rm) h.setDetails.t2RawE1rm = M.round(U.conv(h.setDetails.t2RawE1rm, f, u));
                                    if (h.setDetails.t2PreTM) h.setDetails.t2PreTM = U.rnd(U.conv(h.setDetails.t2PreTM, f, u), u, false);
                                    if (h.setDetails.t2PostTM) h.setDetails.t2PostTM = U.rnd(U.conv(h.setDetails.t2PostTM, f, u), u, false);
                                    if (h.setDetails.t2TmDelta) h.setDetails.t2TmDelta = U.rnd(U.conv(h.setDetails.t2TmDelta, f, u), u, false);
                                }
                                if (h.startTMs) {
                                    Object.keys(h.startTMs).forEach(k => { h.startTMs[k] = U.rnd(U.conv(h.startTMs[k], f, u), u, false); });
                                }
                                if (h.setDetails?.t1 || h.setDetails?.t2) {
                                    const mainVol = U.vol([...(h.setDetails.t1 || []), ...(h.setDetails.t2 || [])]);
                                    let accVol = 0;
                                    (h.setDetails.accessories || []).forEach(a => {
                                        accVol += (a.completed || 0) * U.prs(a.reps) * (DATA.compoundAccessories.has(a.name) ? U.rnd(U.conv(90, f, u), u, false) : U.rnd(U.conv(45, f, u), u, false));
                                    });
                                    h.totalVolume = mainVol + accVol;
                                } else if (h.totalVolume) {
                                    h.totalVolume = M.round(U.conv(h.totalVolume, f, u));
                                }
                            });
                            Object.keys(this.e1rmHistory).forEach(k => { (this.e1rmHistory[k] || []).forEach(e => { if (e.e1rm) e.e1rm = M.round(U.conv(e.e1rm, f, u)); }); });
                            this.bwLog.forEach(b => b.weight = M.round(U.conv(b.weight, f, u) * 10) / 10);
                            this.prefs.barWeight = u === 'kg' ? 20 : 45; this.prefs.weightUnit = u; this.savePrefs(); this.save(); U.s('lift_bodyweight', this.bwLog); U.s('lift_prs', this.prs); U.s('lift_e1rm_history', this.e1rmHistory); this.$nextTick(() => this.draw());
                        } catch(e) {
                            console.error(e);
                            Object.assign(this, backup);
                            alert("Conversion failed. Data restored safely.");
                        }
                    }
                },
                finSetup() { if (Object.values(this.setup).some(v => v > 0)) { Object.keys(this.setup).forEach(k => this.tms[k] = U.rnd(this.setup[k] * .9, this.prefs.weightUnit)); this.save(); this.savePrefs(); this.view = 'dashboard'; } }, resume() { this.session = this.savedSession; if (!this.session.completedAcc) this.session.completedAcc = {}; if (!this.session.startTMs) this.session.startTMs = { ...this.tms }; if (this.session.t1 && !this.session.t1.baseLift) this.session.t1.baseLift = this.baseTM(this.session.t1.name) || this.session.t1.name; if (this.session.t2 && !this.session.t2.baseLift) this.session.t2.baseLift = this.baseTM(this.session.t2.originalName || this.session.t2.name) || this.session.t2.originalName || this.session.t2.name; this.lastSetCompletedAt = null; this.activeModal = null; this.view = 'workout'; this.reqWake(); },
                logBW() { if (this.tempBodyWeight) { this.bwLog.push({ date: U.now(), weight: Number(this.tempBodyWeight) }); this.bwLog = normalizeBodyweightLog(this.bwLog); U.s('lift_bodyweight', this.bwLog); } this.activeModal = null; this.$nextTick?.(() => this.drawPRCharts()); }, getBW(t) { const w = normalizeBodyweightLog(this.bwLog).map(x => x.weight); return !w.length ? '-' : t === 'min' ? M.min(...w).toFixed(1) : t === 'max' ? M.max(...w).toFixed(1) : w[w.length - 1].toFixed(1); }, fmtVolS: v => v ? v > 1e6 ? (v / 1e6).toFixed(1) + 'M' : v > 1e3 ? (v / 1e3).toFixed(0) + 'K' : v : '-',
                togAcc(n, i) { const k = `${n}-${i}`, p = this.session.completedAcc[k]; this.session.completedAcc[k] = !this.session.completedAcc[k]; this._volDirty = true; this.saveSess(); if (this.session.completedAcc[k] && this.prefs.autoStartTimer) this.timerStart(this.prefs.smartRest ? this.getSmartRestDuration('t3') : +this.prefs.restT3); this._setUndo(this.session.completedAcc[k] ? 'Acc done' : 'Acc undone', () => { this.session.completedAcc[k] = p; this._volDirty = true; this.saveSess(); }); }, isAccDone(n, i) { return !!this.session?.completedAcc?.[`${n}-${i}`]; }, addSet(t = 't1') { const s = this.session[t]?.sets; if (!s || !s.length) return; s.push({ ...s[s.length - 1], completed: false, failed: false, completedAt: null, performed: null, rpe: null, setDuration: 0, timeSincePrev: null }); this.saveSess(); },
                exportJSON() { const d = { version: DATA_VERSION, main: U.g('nsuns_ultimate'), prefs: U.g('lift_preferences'), bw: U.g('lift_bodyweight'), ach: U.g('lift_achievements'), prs: U.g('lift_prs'), e1rm: U.g('lift_e1rm_history'), tmpl: U.g('lift_templates'), notes: U.g('lift_exercise_notes'), ton: U.g('lift_tonnage_goal'), rh: U.g('lift_rest_history'), xp: U.g('lift_xp') }; const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([J.stringify(d)], { type: 'application/json' })); a.download = `lift_backup_${U.iso(U.now())}.json`; a.click(); },
                exportCSV() { const c = ['Date,Title,Dur,Vol,RPE,PR,T1,TopSet,TM', ...this.history.map(x => [x.date, x.title, x.duration, x.totalVolume, x.rpe, x.pr ? 'Y' : 'N', x.details?.t1, x.details?.actualTopWeight || x.details?.weight, x.details?.tm].join(','))].join('\n'); const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([c], { type: 'text/csv' })); a.download = `lift_export_${U.iso(U.now())}.csv`; a.click(); },
                importData(e) { const r = new FileReader(); r.onload = ev => { try { const d = J.parse(ev.target.result); if (!d || !d.version || !d.main) return alert('Invalid or corrupted backup file'); U.s('nsuns_ultimate', d.main); U.s('lift_preferences', d.prefs); U.s('lift_bodyweight', d.bw); U.s('lift_achievements', d.ach); U.s('lift_prs', d.prs); U.s('lift_e1rm_history', d.e1rm); U.s('lift_templates', d.tmpl); U.s('lift_exercise_notes', d.notes); U.s('lift_tonnage_goal', d.ton); U.s('lift_rest_history', d.rh); U.s('lift_xp', d.xp); location.reload(); } catch { alert('Error parsing backup file'); } }; r.readAsText(e.target.files[0]); },
                reset() { if (confirm('Reset ALL?')) { LS.clear(); location.reload(); } }, histFilt() { const l = this.history.slice().reverse(); return this.historyFilter !== 'all' ? l.filter(h => h.details?.t1 === this.historyFilter).slice(0, 50) : l.slice(0, 50); }, showDay(d) { if (d.logs && d.logs.length) this.openLog(d.logs[d.logs.length - 1]); }, openLog(l) { this.selectedLog = l; this.isEditingLog = false; this.activeModal = 'detail'; }, delLog() { if (confirm('Delete?')) { this.history = this.history.filter(h => h.timestamp !== this.selectedLog.timestamp); this.save(); this.computeStreak(); this.activeModal = null; this.calBuild(); this.$nextTick(() => this.draw()); } }, saveLog() { const i = this.history.findIndex(h => h.timestamp === this.selectedLog.timestamp); if (i !== -1) { Object.assign(this.history[i], { notes: this.selectedLog.notes, duration: parseInt(this.selectedLog.duration) || 0, rating: parseInt(this.selectedLog.rating) || 0 }); this.save(); this.isEditingLog = false; this.$nextTick(() => this.draw()); } },
                beep() { try { if (!window.ac) window.ac = new (window.AudioContext || window.webkitAudioContext); const o = ac.createOscillator(), g = ac.createGain(); o.connect(g); g.connect(ac.destination); o.frequency.value = 800; g.gain.setValueAtTime(0.5, ac.currentTime); g.gain.exponentialRampToValueAtTime(1e-5, ac.currentTime + .5); o.start(); o.stop(ac.currentTime + .5); } catch(e){} }, toggleZen() { this.zenMode = !this.zenMode; document.body.style.overflow = this.zenMode ? 'hidden' : ''; }, getZen() { if (!this.session) return null; const f = (t, k) => { const s = this.session[t]?.sets?.find(x => !x.completed); return s ? { t, n: k === 'n' ? this.session[t].name : (this.session[t].selectedExercise || this.session[t].name), w: s.weight, r: s.reps, amrap: s.amrap, s, i: this.session[t].sets.indexOf(s) } : null; }; let z = f('t1', 'n') || f('t2', 'e'); if (z) return z; for (const a of (this.session.acc || [])) { const o = a.originalName || a.name; for (let i = 1; i <= a.sets; i++) { if (!this.isAccDone(o, i)) return { t: 'acc', n: a.selectedExercise || a.name, w: '-', r: (a.reps || '10-12'), amrap: false, on: o, i }; } } return null; }, doZen() { const z = this.getZen(); if (!z) return; if (z.t === 'acc') this.togAcc(z.on, z.i); else { if (z.s.amrap) { if (this.zenAmrap === null || this.zenAmrap === '') return alert('Enter reps'); z.s.performed = parseInt(this.zenAmrap); this.zenAmrap = null; } this.toggleSet(z.s, z.t); } }, cancel() { if (confirm('Cancel?')) { this.session = {}; this.savedSession = null; U.d('lift_active_session'); U.d('lift_active_session_backup'); this.timer.active = false; this.view = 'dashboard'; this.relWake(); this.$nextTick(() => { this.draw(); this.scrollToActive(); }); } }, getProgressionLabel(m) { return { 'nsuns_increase': 'ðŸ“ˆ nSuns +', 'nsuns_decrease': 'â¬‡ï¸ nSuns âˆ’', 'nsuns_hold': 'â¸ï¸ nSuns Hold', 'nsuns_hold_no_amrap': 'â¸ï¸ nSuns Hold', 'nsuns_hold_incomplete': 'â¸ï¸ nSuns Hold', 'nsuns_t2_increase': 'ðŸ“ˆ nSuns T2 +', 'nsuns_t2_hold': 'â¸ï¸ nSuns T2 Hold', 'ppl_amrap_linear': 'ðŸ“ˆ PPL AMRAP', 'amrap_linear': 'ðŸ“ˆ AMRAP +', 'linear': 'ðŸ“ Linear +', 't2_linear': 'ðŸ“ˆ T2 +', 't2_hold': 'â¸ï¸ T2 Hold', '531_cycle': 'ðŸ”„ 531 Cycle +', '531_deload': 'â¬‡ï¸ 531 Deload', '531_in_cycle': 'ðŸ”„ 531 In Cycle', '531_hold': 'â¸ï¸ 531 Hold', '531_t2_no_change': 'â¸ï¸ 531 BBB Hold', 'sl_linear': 'ðŸ“ SL Linear', 'sl_retry': 'ðŸ” SL Retry', 'sl_deload': 'â¬‡ï¸ SL Deload', 'sl_to_3x5': 'ðŸ“‰ SLâ†’3Ã—5', 'sl_to_3x3': 'ðŸ“‰ SLâ†’3Ã—3', 'sl_to_1x3': 'ðŸ“‰ SLâ†’1Ã—3', 'gz_t1_linear': 'ðŸ“ˆ GZ T1 +', 'gz_t2_linear': 'ðŸ“ˆ GZ T2 +', 'gz_t1_stage_advance': 'â¬†ï¸ GZ T1 Stage', 'gz_t2_stage_advance': 'â¬†ï¸ GZ T2 Stage', 'gz_t1_stage_reset': 'ðŸ”„ GZ T1 Reset', 'gz_t2_stage_reset': 'ðŸ”„ GZ T2 Reset', 'hold_missed': 'â¸ï¸ Hold (Missed)', 'hold': 'â¸ï¸ Hold' }[m] || 'â€”' },
                getE1RMTrend(l) { const e = (this.e1rmHistory[l] || []).slice(-5); if (e.length < 2) return { direction: 'flat', change: 0 }; const c = e[e.length - 1].e1rm - e[0].e1rm; return { direction: c > 0 ? 'up' : c < 0 ? 'down' : 'flat', change: c } },
                _getTotalWeights() { const b = this.bwLog.slice(-1)[0]?.weight, t = ((this.tms.Bench || 0) + (this.tms.Squat || 0) + (this.tms.Deadlift || 0)) / .9; if (!b || !t) return null; const k = this.prefs.weightUnit === 'kg'; return { w: k ? b : b * .453592, tk: k ? t : t * .453592 } },
                getWilksEstimate() { const d = this._getTotalWeights(); if (!d || d.w <= 0) return null; const x = d.w, denom = -216.0475144 + 16.2606339 * x - 0.002388645 * M.pow(x, 2) - 0.00113732 * M.pow(x, 3) + 7.01863e-6 * M.pow(x, 4) - 1.291e-8 * M.pow(x, 5); return denom <= 0 ? null : M.round(d.tk * (500 / denom)) },
                getDotsEstimate() { const d = this._getTotalWeights(); if (!d || d.w <= 0) return null; const x = d.w, denom = -0.000001093 * M.pow(x, 4) + 0.0007391293 * M.pow(x, 3) - 0.1918759221 * M.pow(x, 2) + 24.0900756 * x - 307.75076; return denom <= 0 ? null : M.round((d.tk * 500) / denom) }
            }
        }

        const LIFT_STORAGE_KEYS = ['nsuns_ultimate', 'lift_preferences', 'lift_bodyweight', 'lift_achievements', 'lift_prs', 'lift_e1rm_history', 'lift_templates', 'lift_exercise_notes', 'lift_tonnage_goal', 'lift_rest_history', 'lift_xp', 'lift_active_session', 'lift_active_session_backup'];
        const clone = v => J.parse(J.stringify(v));
        const storageGet = (storage, key, fallback = null) => {
            try {
                const raw = storage.getItem(key);
                return raw == null ? fallback : (J.parse(raw) ?? fallback);
            } catch {
                return fallback;
            }
        };

        const parseHistoryDateString = value => {
            const s = String(value || '').trim();
            if (!s) return 0;
            if (/^\d+(?:\.\d+)?$/.test(s)) {
                const n = Number(s);
                if (Number.isFinite(n) && n > 0) return n < 1e11 ? n * 1000 : n;
            }
            const localDate = s.match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})(?:\D.*)?$/);
            if (localDate) {
                const a = +localDate[1], b = +localDate[2], y = +localDate[3];
                const day = a > 12 ? a : b > 12 ? b : b;
                const month = a > 12 ? b : b > 12 ? a : a;
                const ts = new D(y, month - 1, day).getTime();
                if (Number.isFinite(ts)) return ts;
            }
            const parsed = D.parse(s);
            return Number.isFinite(parsed) ? parsed : 0;
        };

        const historyTimestamp = record => {
            if (!record || typeof record !== 'object') return 0;
            const candidates = [record.timestamp, record.completedAt, record.endTime, record.isoDate, record.date];
            for (const raw of candidates) {
                if (raw && typeof raw === 'object') {
                    const seconds = raw.seconds ?? raw._seconds;
                    if (Number.isFinite(+seconds)) return (+seconds * 1000) + (Number(raw.nanoseconds ?? raw._nanoseconds) || 0) / 1e6;
                }
                if (typeof raw === 'number' && Number.isFinite(raw) && raw > 0) return raw < 1e11 ? raw * 1000 : raw;
                const parsed = parseHistoryDateString(raw);
                if (parsed > 0) return parsed;
            }
            return 0;
        };

        const normalizeHistoryRecords = history => (Array.isArray(history) ? history : []).map(record => {
            if (!record || typeof record !== 'object') return record;
            const timestamp = historyTimestamp(record);
            if (timestamp > 0) {
                record.timestamp = timestamp;
                record.isoDate = U.iso(timestamp);
            }
            record.details = record.details && typeof record.details === 'object' ? record.details : {};
            record.setDetails = record.setDetails && typeof record.setDetails === 'object' ? record.setDetails : {};
            if (!record.details.t1) record.details.t1 = normalizeExerciseName(record.lift || record.exercise || record.setDetails.t1Name || record.title);
            if (!record.setDetails.t1 && Array.isArray(record.sets)) record.setDetails.t1 = record.sets;
            if (!record.setDetails.t2 && Array.isArray(record.secondarySets)) record.setDetails.t2 = record.secondarySets;
            if (!record.setDetails.t2Name) record.setDetails.t2Name = record.t2 || record.secondaryExercise || null;
            if (!Array.isArray(record.setDetails.accessories)) record.setDetails.accessories = Array.isArray(record.accessories) ? record.accessories : [];
            return record;
        });

        const normalizeBodyweightLog = entries => (Array.isArray(entries) ? entries : []).map(entry => {
            const record = typeof entry === 'number' ? { weight: entry } : { ...(entry || {}) };
            const weight = Number(record.weight ?? record.bodyweight ?? record.bodyWeight ?? record.bw ?? record.value);
            const date = historyTimestamp({ timestamp: record.timestamp ?? record.createdAt, date: record.date ?? record.isoDate });
            return { ...record, weight, date };
        }).filter(record => Number.isFinite(record.weight) && record.weight > 0 && record.date > 0)
            .sort((a, b) => a.date - b.date);

        const getBodyweightSeries = entries => {
            const normalized = normalizeBodyweightLog(entries).slice(-30);
            return { labels: normalized.map(x => U.iso(x.date)), values: normalized.map(x => x.weight) };
        };
        const storageSet = (storage, key, value) => {
            try { storage.setItem(key, J.stringify(value)); return true; } catch { return false; }
        };
        const withNow = (now, fn) => {
            if (!now) return fn();
            const oldNow = U.now;
            U.now = () => now;
            try { return fn(); } finally { U.now = oldNow; }
        };
        const createTestApp = (state = {}) => {
            const a = app();
            a.$nextTick = cb => cb && cb();
            a.prefs = mergePrefs({ ...a.prefs, ...(state.prefs || {}) });
            a.tms = { ...a.tms, ...(state.tms || {}) };
            a.state = clone(state.state || a.state);
            a.history = normalizeHistoryRecords(clone(state.history || []));
            a.prs = clone(state.prs || {});
            a.e1rmHistory = clone(state.e1rmHistory || {});
            a.bwLog = normalizeBodyweightLog(clone(state.bwLog || []));
            a.restHistory = clone(state.restHistory || []);
            a.xp = state.xp ?? a.xp;
            a.session = clone(state.session || {});
            a.sessionRPE = state.sessionRPE ?? a.sessionRPE;
            a.cycleWeek531 = state.cycleWeek531 ?? a.cycleWeek531;
            a.week = state.week ?? a.week;
            a.deloadInfo = clone(state.deloadInfo || a.deloadInfo);
            return a;
        };
        const setSnapshot = sets => (sets || []).map(s => `${s.weight}x${s.reps}${s.amrap ? '+' : ''}`);
        const calculatePlateLoading = ({ weight, unit = 'lbs', barWeight = unit === 'kg' ? 20 : 45 } = {}) => {
            const w = +weight;
            if (!Number.isFinite(w)) return [];
            return plateLoadForSide((w - barWeight) / 2, unit);
        };
        const calculateProgression = ({ lift = 'Bench', sets = [], program = 'nsuns', tier = 't1', tms = {}, prefs = {}, state = {}, history = [], cycleWeek531 = 1 } = {}) => {
            const a = createTestApp({ tms: { Bench: 225, Squat: 315, Deadlift: 405, OHP: 135, Row: 185, ...tms }, prefs, state, history, cycleWeek531 });
            const beforeTM = a.tms[lift] || 0;
            const result = a.computeProgression(lift, clone(sets), program, tier);
            return { ...result, beforeTM, afterTM: a.tms[lift], state: clone(a.state) };
        };
        const calculateRecoverySnapshot = ({ history = [], session = {}, tms = {}, prefs = {}, xp = 0, now = null, sessionRPE = 7 } = {}) => withNow(now, () => {
            const a = createTestApp({ history, session, tms, prefs, xp, sessionRPE });
            a.updCache();
            return { recovery: clone(a.cache.recovery), recoveryMap: clone(a.cache.recoveryMap), mgVol: clone(a.cache.mgVol), readiness: a.getReadinessScore(), advice: a.getRecoveryAdvice(), volumeLandmarks: clone(a.cache.volumeLandmarks) };
        });
        const calculateVolumeLandmarks = ({ history = [], now = null } = {}) => withNow(now, () => {
            const a = createTestApp({ history });
            a._computeVolumeLandmarks();
            return clone(a.cache.volumeLandmarks);
        });
        const evaluatePR = ({ lift = 'Bench', sets = [], prs = {}, e1rmHistory = {}, exerciseName = lift, now = null } = {}) => withNow(now, () => {
            const a = createTestApp({ prs, e1rmHistory });
            const oldSave = U.s;
            U.s = () => {};
            try {
                const rawE1RM = a._computeBestE1RMFromSets(sets);
                const normalizedE1RM = a._normalizeE1RMToBase(rawE1RM, exerciseName);
                a._recordE1RM(lift, rawE1RM, exerciseName);
                const isPR = a._updatePR(lift, normalizedE1RM);
                if (exerciseName !== lift) a._updatePR(exerciseName, rawE1RM);
                return { rawE1RM, normalizedE1RM, isPR, prs: clone(a.prs), e1rmHistory: clone(a.e1rmHistory) };
            } finally {
                U.s = oldSave;
            }
        });
        const serializeState = (storage = LS) => ({
            version: DATA_VERSION,
            main: storageGet(storage, 'nsuns_ultimate', {}),
            prefs: mergePrefs(storageGet(storage, 'lift_preferences', {})),
            bw: storageGet(storage, 'lift_bodyweight', []),
            ach: storageGet(storage, 'lift_achievements', []),
            prs: storageGet(storage, 'lift_prs', {}),
            e1rm: storageGet(storage, 'lift_e1rm_history', {}),
            tmpl: storageGet(storage, 'lift_templates', []),
            notes: storageGet(storage, 'lift_exercise_notes', {}),
            ton: storageGet(storage, 'lift_tonnage_goal', 0),
            rh: storageGet(storage, 'lift_rest_history', []),
            xp: storageGet(storage, 'lift_xp', 0),
            active: storageGet(storage, 'lift_active_session', null)
        });
        const hydrateState = (payload, storage = LS) => {
            if (!payload || typeof payload !== 'object' || !payload.version) return false;
            storageSet(storage, 'nsuns_ultimate', payload.main || {});
            storageSet(storage, 'lift_preferences', mergePrefs(payload.prefs || {}));
            storageSet(storage, 'lift_bodyweight', payload.bw || []);
            storageSet(storage, 'lift_achievements', payload.ach || []);
            storageSet(storage, 'lift_prs', payload.prs || {});
            storageSet(storage, 'lift_e1rm_history', payload.e1rm || {});
            storageSet(storage, 'lift_templates', payload.tmpl || []);
            storageSet(storage, 'lift_exercise_notes', payload.notes || {});
            storageSet(storage, 'lift_tonnage_goal', payload.ton || 0);
            storageSet(storage, 'lift_rest_history', payload.rh || []);
            storageSet(storage, 'lift_xp', payload.xp || 0);
            if (payload.active) storageSet(storage, 'lift_active_session', payload.active);
            return true;
        };
        const calculateDeloadSuggestion = ({ history = [], tms = {}, prefs = {}, session = {}, now = null, e1rmHistory = {}, readinessMap = null } = {}) => withNow(now, () => {
            if (history.length && now) {
                const daysOff = M.floor((now - (history[history.length - 1]?.timestamp || now)) / 864e5);
                const timeOff = [[42, 25, '6+ weeks off'], [28, 20, '4 weeks off'], [14, 10, '2 weeks off']].find(x => daysOff >= x[0]);
                if (timeOff) return { needed: true, percentage: timeOff[1], reason: timeOff[2], protocol: 'Reduce_TMs' };
            }
            const a = createTestApp({ history, tms, prefs, session, e1rmHistory });
            if (readinessMap) a.cache.recoveryMap = readinessMap;
            return a.checkFatigueDeload() || a.checkPerformanceDeload() || null;
        });
        const calculateRestSuggestion = ({ history = [], prefs = {}, tms = {}, pIdx = 0, day = null, session = null, recoveryMap = {}, now = null, opts = {} } = {}) => withNow(now, () => {
            const mergedPrefs = mergePrefs(prefs);
            return analyze_fatigue_and_suggest_rest(history, { prefs: mergedPrefs, program: mergedPrefs.program, pIdx, currentDay: day, session, tms, recoveryMap, now: now || U.now() }, opts);
        });

        window.__LIFT_TEST_API__ = {
            DATA_VERSION,
            DATA,
            PROG,
            U,
            EX_OPTS,
            EX_INDEX,
            impact,
            appFactory: app,
            createTestApp,
            roundWeight: U.rnd,
            convertWeight: U.conv,
            estimateOneRepMax: U.rm,
            calculateVolume: U.vol,
            calculateFatigue: U.fatigue,
            generateSets: opts => {
                const a = createTestApp({ tms: opts?.tms, prefs: opts?.prefs, state: opts?.state, cycleWeek531: opts?.cycleWeek531 });
                return a.getSets(opts.scheme, opts.lift, opts.tm, opts.tier || 't1', opts.exerciseOverride || null);
            },
            calculateProgression,
            calculatePlateLoading,
            calculateRecoverySnapshot,
            calculateVolumeLandmarks,
            evaluatePR,
            serializeState,
            hydrateState,
            mergePrefs,
            resolveTheme,
            normalizeTheme,
            normalizeProgramKey,
            applyThemePreference,
            historyTimestamp,
            normalizeHistoryRecords,
            normalizeBodyweightLog,
            getBodyweightSeries,
            calculateDeloadSuggestion,
            analyze_fatigue_and_suggest_rest,
            calculateRestSuggestion,
            validateProgramProgressionContext,
            validateAllProgramScience,
            setRestFloor,
            muscleRecoveryHours,
            helpers: {
                roundWeight: U.rnd,
                convertWeight: U.conv,
                estimateOneRepMax: U.rm,
                calculateVolume: U.vol,
                calculateFatigue: U.fatigue,
                generateSets: opts => window.__LIFT_TEST_API__.generateSets(opts),
                calculateProgression,
                calculatePlateLoading,
                calculateRecoverySnapshot,
                calculateVolumeLandmarks,
                evaluatePR,
                resolveTheme,
                normalizeProgramKey,
                historyTimestamp,
                normalizeHistoryRecords,
                normalizeBodyweightLog,
                getBodyweightSeries,
                serializeState,
                hydrateState,
                calculateRestSuggestion,
                validateProgramProgressionContext,
                validateAllProgramScience,
                setRestFloor,
                setSnapshot
            }
        };
