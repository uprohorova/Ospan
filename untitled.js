/***************** 
 * Untitled *
 *****************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'untitled';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instruction_2RoutineBegin());
flowScheduler.add(instruction_2RoutineEachFrame());
flowScheduler.add(instruction_2RoutineEnd());
const one_repeat_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(one_repeat_loopLoopBegin(one_repeat_loopLoopScheduler));
flowScheduler.add(one_repeat_loopLoopScheduler);
flowScheduler.add(one_repeat_loopLoopEnd);



const two_repeatLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(two_repeatLoopBegin(two_repeatLoopScheduler));
flowScheduler.add(two_repeatLoopScheduler);
flowScheduler.add(two_repeatLoopEnd);



flowScheduler.add(answrita1RoutineBegin());
flowScheduler.add(answrita1RoutineEachFrame());
flowScheduler.add(answrita1RoutineEnd());
const three_repeatLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(three_repeatLoopBegin(three_repeatLoopScheduler));
flowScheduler.add(three_repeatLoopScheduler);
flowScheduler.add(three_repeatLoopEnd);



const four_repeatsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(four_repeatsLoopBegin(four_repeatsLoopScheduler));
flowScheduler.add(four_repeatsLoopScheduler);
flowScheduler.add(four_repeatsLoopEnd);



flowScheduler.add(answrita1RoutineBegin());
flowScheduler.add(answrita1RoutineEachFrame());
flowScheduler.add(answrita1RoutineEnd());
const five_repeatLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(five_repeatLoopBegin(five_repeatLoopScheduler));
flowScheduler.add(five_repeatLoopScheduler);
flowScheduler.add(five_repeatLoopEnd);



const six_repeatLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(six_repeatLoopBegin(six_repeatLoopScheduler));
flowScheduler.add(six_repeatLoopScheduler);
flowScheduler.add(six_repeatLoopEnd);



const seven_repeatLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(seven_repeatLoopBegin(seven_repeatLoopScheduler));
flowScheduler.add(seven_repeatLoopScheduler);
flowScheduler.add(seven_repeatLoopEnd);



flowScheduler.add(answrita1RoutineBegin());
flowScheduler.add(answrita1RoutineEachFrame());
flowScheduler.add(answrita1RoutineEnd());
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(rtertgeRoutineBegin());
flowScheduler.add(rtertgeRoutineEachFrame());
flowScheduler.add(rtertgeRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instruction_2Clock;
var instr_2;
var key_instr_2;
var expritaClock;
var math_pro;
var math_resp;
var let_2Clock;
var text_2;
var answrita1Clock;
var recall_instr;
var recall_input;
var thanksClock;
var text;
var rtertgeClock;
var text_3;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruction_2"
  instruction_2Clock = new util.Clock();
  instr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_2',
    text: 'В рамках этой части эксперимента Вам будут предоставлены для решения арифметические задачи на сложение/вычетание и умножение/деление. Ваша задача — как можно быстрее и точнее определить, верно ли решение:\n\nНажмите 1, если ответ верный.\n\nНажмите 2, если ответ неверный.\nПосле каждой задачи на экране появится буква (например, F). Запомните её.\n\nВ конце серии (после 3–5 задач) вам нужно будет:\n\nВвести букву, которую Вы запомнили раннее. \n\nДля начала эксперимента нажмите ПРОБЕЛ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_instr_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exprita"
  expritaClock = new util.Clock();
  math_pro = new visual.TextStim({
    win: psychoJS.window,
    name: 'math_pro',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  math_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "let_2"
  let_2Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "answrita1"
  answrita1Clock = new util.Clock();
  recall_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_instr',
    text: 'Внимание!\nВведите все буквы, которые вы запомнили, в правильном порядке. \n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  recall_input = new visual.TextBox({
    win: psychoJS.window,
    name: 'recall_input',
    text: '',
    placeholder: 'undefined',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Спасибо за участие!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "rtertge"
  rtertgeClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Подождите, идет запись данных эксперимента...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instruction_2MaxDurationReached;
var _key_instr_2_allKeys;
var instruction_2MaxDuration;
var instruction_2Components;
function instruction_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction_2Clock.reset();
    routineTimer.reset();
    instruction_2MaxDurationReached = false;
    // update component parameters for each repeat
    key_instr_2.keys = undefined;
    key_instr_2.rt = undefined;
    _key_instr_2_allKeys = [];
    psychoJS.experiment.addData('instruction_2.started', globalClock.getTime());
    instruction_2MaxDuration = null
    // keep track of which components have finished
    instruction_2Components = [];
    instruction_2Components.push(instr_2);
    instruction_2Components.push(key_instr_2);
    
    for (const thisComponent of instruction_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction_2' ---
    // get current time
    t = instruction_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_2* updates
    if (t >= 0.0 && instr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_2.tStart = t;  // (not accounting for frame time here)
      instr_2.frameNStart = frameN;  // exact frame index
      
      instr_2.setAutoDraw(true);
    }
    
    
    // if instr_2 is active this frame...
    if (instr_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_instr_2* updates
    if (t >= 0.0 && key_instr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instr_2.tStart = t;  // (not accounting for frame time here)
      key_instr_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instr_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instr_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instr_2.clearEvents(); });
    }
    
    // if key_instr_2 is active this frame...
    if (key_instr_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instr_2.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_instr_2_allKeys = _key_instr_2_allKeys.concat(theseKeys);
      if (_key_instr_2_allKeys.length > 0) {
        key_instr_2.keys = _key_instr_2_allKeys[0].name;  // just the first key pressed
        key_instr_2.rt = _key_instr_2_allKeys[0].rt;
        key_instr_2.duration = _key_instr_2_allKeys[0].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction_2' ---
    for (const thisComponent of instruction_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instr_2.corr, level);
    }
    psychoJS.experiment.addData('key_instr_2.keys', key_instr_2.keys);
    if (typeof key_instr_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instr_2.rt', key_instr_2.rt);
        psychoJS.experiment.addData('key_instr_2.duration', key_instr_2.duration);
        routineTimer.reset();
        }
    
    key_instr_2.stop();
    // the Routine "instruction_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var one_repeat_loop;
function one_repeat_loopLoopBegin(one_repeat_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    one_repeat_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Первая буква!.xlsx',
      seed: undefined, name: 'one_repeat_loop'
    });
    psychoJS.experiment.addLoop(one_repeat_loop); // add the loop to the experiment
    currentLoop = one_repeat_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisOne_repeat_loop of one_repeat_loop) {
      snapshot = one_repeat_loop.getSnapshot();
      one_repeat_loopLoopScheduler.add(importConditions(snapshot));
      one_repeat_loopLoopScheduler.add(expritaRoutineBegin(snapshot));
      one_repeat_loopLoopScheduler.add(expritaRoutineEachFrame());
      one_repeat_loopLoopScheduler.add(expritaRoutineEnd(snapshot));
      one_repeat_loopLoopScheduler.add(let_2RoutineBegin(snapshot));
      one_repeat_loopLoopScheduler.add(let_2RoutineEachFrame());
      one_repeat_loopLoopScheduler.add(let_2RoutineEnd(snapshot));
      one_repeat_loopLoopScheduler.add(one_repeat_loopLoopEndIteration(one_repeat_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function one_repeat_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(one_repeat_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function one_repeat_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var two_repeat;
function two_repeatLoopBegin(two_repeatLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    two_repeat = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Вторая буква.xlsx',
      seed: undefined, name: 'two_repeat'
    });
    psychoJS.experiment.addLoop(two_repeat); // add the loop to the experiment
    currentLoop = two_repeat;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTwo_repeat of two_repeat) {
      snapshot = two_repeat.getSnapshot();
      two_repeatLoopScheduler.add(importConditions(snapshot));
      two_repeatLoopScheduler.add(expritaRoutineBegin(snapshot));
      two_repeatLoopScheduler.add(expritaRoutineEachFrame());
      two_repeatLoopScheduler.add(expritaRoutineEnd(snapshot));
      two_repeatLoopScheduler.add(let_2RoutineBegin(snapshot));
      two_repeatLoopScheduler.add(let_2RoutineEachFrame());
      two_repeatLoopScheduler.add(let_2RoutineEnd(snapshot));
      two_repeatLoopScheduler.add(two_repeatLoopEndIteration(two_repeatLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function two_repeatLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(two_repeat);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function two_repeatLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var three_repeat;
function three_repeatLoopBegin(three_repeatLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    three_repeat = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Третья буква.xlsx',
      seed: undefined, name: 'three_repeat'
    });
    psychoJS.experiment.addLoop(three_repeat); // add the loop to the experiment
    currentLoop = three_repeat;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisThree_repeat of three_repeat) {
      snapshot = three_repeat.getSnapshot();
      three_repeatLoopScheduler.add(importConditions(snapshot));
      three_repeatLoopScheduler.add(expritaRoutineBegin(snapshot));
      three_repeatLoopScheduler.add(expritaRoutineEachFrame());
      three_repeatLoopScheduler.add(expritaRoutineEnd(snapshot));
      three_repeatLoopScheduler.add(let_2RoutineBegin(snapshot));
      three_repeatLoopScheduler.add(let_2RoutineEachFrame());
      three_repeatLoopScheduler.add(let_2RoutineEnd(snapshot));
      three_repeatLoopScheduler.add(three_repeatLoopEndIteration(three_repeatLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function three_repeatLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(three_repeat);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function three_repeatLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var four_repeats;
function four_repeatsLoopBegin(four_repeatsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    four_repeats = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Четвертая буква.xlsx',
      seed: undefined, name: 'four_repeats'
    });
    psychoJS.experiment.addLoop(four_repeats); // add the loop to the experiment
    currentLoop = four_repeats;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisFour_repeat of four_repeats) {
      snapshot = four_repeats.getSnapshot();
      four_repeatsLoopScheduler.add(importConditions(snapshot));
      four_repeatsLoopScheduler.add(expritaRoutineBegin(snapshot));
      four_repeatsLoopScheduler.add(expritaRoutineEachFrame());
      four_repeatsLoopScheduler.add(expritaRoutineEnd(snapshot));
      four_repeatsLoopScheduler.add(let_2RoutineBegin(snapshot));
      four_repeatsLoopScheduler.add(let_2RoutineEachFrame());
      four_repeatsLoopScheduler.add(let_2RoutineEnd(snapshot));
      four_repeatsLoopScheduler.add(four_repeatsLoopEndIteration(four_repeatsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function four_repeatsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(four_repeats);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function four_repeatsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var five_repeat;
function five_repeatLoopBegin(five_repeatLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    five_repeat = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Пятая буква.xlsx',
      seed: undefined, name: 'five_repeat'
    });
    psychoJS.experiment.addLoop(five_repeat); // add the loop to the experiment
    currentLoop = five_repeat;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisFive_repeat of five_repeat) {
      snapshot = five_repeat.getSnapshot();
      five_repeatLoopScheduler.add(importConditions(snapshot));
      five_repeatLoopScheduler.add(expritaRoutineBegin(snapshot));
      five_repeatLoopScheduler.add(expritaRoutineEachFrame());
      five_repeatLoopScheduler.add(expritaRoutineEnd(snapshot));
      five_repeatLoopScheduler.add(let_2RoutineBegin(snapshot));
      five_repeatLoopScheduler.add(let_2RoutineEachFrame());
      five_repeatLoopScheduler.add(let_2RoutineEnd(snapshot));
      five_repeatLoopScheduler.add(five_repeatLoopEndIteration(five_repeatLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function five_repeatLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(five_repeat);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function five_repeatLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var six_repeat;
function six_repeatLoopBegin(six_repeatLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    six_repeat = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Шестая буква.xlsx',
      seed: undefined, name: 'six_repeat'
    });
    psychoJS.experiment.addLoop(six_repeat); // add the loop to the experiment
    currentLoop = six_repeat;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSix_repeat of six_repeat) {
      snapshot = six_repeat.getSnapshot();
      six_repeatLoopScheduler.add(importConditions(snapshot));
      six_repeatLoopScheduler.add(expritaRoutineBegin(snapshot));
      six_repeatLoopScheduler.add(expritaRoutineEachFrame());
      six_repeatLoopScheduler.add(expritaRoutineEnd(snapshot));
      six_repeatLoopScheduler.add(let_2RoutineBegin(snapshot));
      six_repeatLoopScheduler.add(let_2RoutineEachFrame());
      six_repeatLoopScheduler.add(let_2RoutineEnd(snapshot));
      six_repeatLoopScheduler.add(six_repeatLoopEndIteration(six_repeatLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function six_repeatLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(six_repeat);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function six_repeatLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var seven_repeat;
function seven_repeatLoopBegin(seven_repeatLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    seven_repeat = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'седьмая буква.xlsx',
      seed: undefined, name: 'seven_repeat'
    });
    psychoJS.experiment.addLoop(seven_repeat); // add the loop to the experiment
    currentLoop = seven_repeat;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSeven_repeat of seven_repeat) {
      snapshot = seven_repeat.getSnapshot();
      seven_repeatLoopScheduler.add(importConditions(snapshot));
      seven_repeatLoopScheduler.add(expritaRoutineBegin(snapshot));
      seven_repeatLoopScheduler.add(expritaRoutineEachFrame());
      seven_repeatLoopScheduler.add(expritaRoutineEnd(snapshot));
      seven_repeatLoopScheduler.add(let_2RoutineBegin(snapshot));
      seven_repeatLoopScheduler.add(let_2RoutineEachFrame());
      seven_repeatLoopScheduler.add(let_2RoutineEnd(snapshot));
      seven_repeatLoopScheduler.add(seven_repeatLoopEndIteration(seven_repeatLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function seven_repeatLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(seven_repeat);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function seven_repeatLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var expritaMaxDurationReached;
var _math_resp_allKeys;
var expritaMaxDuration;
var expritaComponents;
function expritaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exprita' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    expritaClock.reset(routineTimer.getTime());
    routineTimer.add(30.000000);
    expritaMaxDurationReached = false;
    // update component parameters for each repeat
    math_pro.setText(math_problem);
    math_resp.keys = undefined;
    math_resp.rt = undefined;
    _math_resp_allKeys = [];
    psychoJS.experiment.addData('exprita.started', globalClock.getTime());
    expritaMaxDuration = null
    // keep track of which components have finished
    expritaComponents = [];
    expritaComponents.push(math_pro);
    expritaComponents.push(math_resp);
    
    for (const thisComponent of expritaComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function expritaRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exprita' ---
    // get current time
    t = expritaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *math_pro* updates
    if (t >= 0.0 && math_pro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      math_pro.tStart = t;  // (not accounting for frame time here)
      math_pro.frameNStart = frameN;  // exact frame index
      
      math_pro.setAutoDraw(true);
    }
    
    
    // if math_pro is active this frame...
    if (math_pro.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (math_pro.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      math_pro.tStop = t;  // not accounting for scr refresh
      math_pro.frameNStop = frameN;  // exact frame index
      // update status
      math_pro.status = PsychoJS.Status.FINISHED;
      math_pro.setAutoDraw(false);
    }
    
    
    // *math_resp* updates
    if (t >= 0.0 && math_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      math_resp.tStart = t;  // (not accounting for frame time here)
      math_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { math_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { math_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { math_resp.clearEvents(); });
    }
    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (math_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      math_resp.tStop = t;  // not accounting for scr refresh
      math_resp.frameNStop = frameN;  // exact frame index
      // update status
      math_resp.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (math_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        math_resp.tStop = t;  // not accounting for scr refresh
        math_resp.frameNStop = frameN;  // exact frame index
        // update status
        math_resp.status = PsychoJS.Status.FINISHED;
        math_resp.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if math_resp is active this frame...
      if (math_resp.status === PsychoJS.Status.STARTED) {
        let theseKeys = math_resp.getKeys({
          keyList: typeof ['1','2'] === 'string' ? [['1','2']] : ['1','2'], 
          waitRelease: false
        });
        _math_resp_allKeys = _math_resp_allKeys.concat(theseKeys);
        if (_math_resp_allKeys.length > 0) {
          math_resp.keys = _math_resp_allKeys[_math_resp_allKeys.length - 1].name;  // just the last key pressed
          math_resp.rt = _math_resp_allKeys[_math_resp_allKeys.length - 1].rt;
          math_resp.duration = _math_resp_allKeys[_math_resp_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of expritaComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function expritaRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'exprita' ---
      for (const thisComponent of expritaComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('exprita.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(math_resp.corr, level);
      }
      psychoJS.experiment.addData('math_resp.keys', math_resp.keys);
      if (typeof math_resp.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('math_resp.rt', math_resp.rt);
          psychoJS.experiment.addData('math_resp.duration', math_resp.duration);
          routineTimer.reset();
          }
      
      math_resp.stop();
      if (routineForceEnded) {
          routineTimer.reset();} else if (expritaMaxDurationReached) {
          expritaClock.add(expritaMaxDuration);
      } else {
          expritaClock.add(30.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var let_2MaxDurationReached;
var let_2MaxDuration;
var let_2Components;
function let_2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'let_2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      let_2Clock.reset(routineTimer.getTime());
      routineTimer.add(3.000000);
      let_2MaxDurationReached = false;
      // update component parameters for each repeat
      text_2.setText(letter);
      psychoJS.experiment.addData('let_2.started', globalClock.getTime());
      let_2MaxDuration = null
      // keep track of which components have finished
      let_2Components = [];
      let_2Components.push(text_2);
      
      for (const thisComponent of let_2Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function let_2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'let_2' ---
      // get current time
      t = let_2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_2* updates
      if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_2.tStart = t;  // (not accounting for frame time here)
        text_2.frameNStart = frameN;  // exact frame index
        
        text_2.setAutoDraw(true);
      }
      
      
      // if text_2 is active this frame...
      if (text_2.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_2.tStop = t;  // not accounting for scr refresh
        text_2.frameNStop = frameN;  // exact frame index
        // update status
        text_2.status = PsychoJS.Status.FINISHED;
        text_2.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of let_2Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function let_2RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'let_2' ---
      for (const thisComponent of let_2Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('let_2.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (let_2MaxDurationReached) {
          let_2Clock.add(let_2MaxDuration);
      } else {
          let_2Clock.add(3.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var answrita1MaxDurationReached;
var answrita1MaxDuration;
var answrita1Components;
function answrita1RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'answrita1' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      answrita1Clock.reset(routineTimer.getTime());
      routineTimer.add(15.000000);
      answrita1MaxDurationReached = false;
      // update component parameters for each repeat
      recall_input.setText('');
      recall_input.refresh();
      recall_input.setPlaceholder('Введите здесь букву');
      psychoJS.experiment.addData('answrita1.started', globalClock.getTime());
      answrita1MaxDuration = null
      // keep track of which components have finished
      answrita1Components = [];
      answrita1Components.push(recall_instr);
      answrita1Components.push(recall_input);
      
      for (const thisComponent of answrita1Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function answrita1RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'answrita1' ---
      // get current time
      t = answrita1Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *recall_instr* updates
      if (t >= 0.0 && recall_instr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        recall_instr.tStart = t;  // (not accounting for frame time here)
        recall_instr.frameNStart = frameN;  // exact frame index
        
        recall_instr.setAutoDraw(true);
      }
      
      
      // if recall_instr is active this frame...
      if (recall_instr.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (recall_instr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        recall_instr.tStop = t;  // not accounting for scr refresh
        recall_instr.frameNStop = frameN;  // exact frame index
        // update status
        recall_instr.status = PsychoJS.Status.FINISHED;
        recall_instr.setAutoDraw(false);
      }
      
      
      // *recall_input* updates
      if (t >= 5.0 && recall_input.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        recall_input.tStart = t;  // (not accounting for frame time here)
        recall_input.frameNStart = frameN;  // exact frame index
        
        recall_input.setAutoDraw(true);
      }
      
      
      // if recall_input is active this frame...
      if (recall_input.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 5.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (recall_input.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        recall_input.tStop = t;  // not accounting for scr refresh
        recall_input.frameNStop = frameN;  // exact frame index
        // update status
        recall_input.status = PsychoJS.Status.FINISHED;
        recall_input.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of answrita1Components)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function answrita1RoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'answrita1' ---
      for (const thisComponent of answrita1Components) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('answrita1.stopped', globalClock.getTime());
      psychoJS.experiment.addData('recall_input.text',recall_input.text)
      if (routineForceEnded) {
          routineTimer.reset();} else if (answrita1MaxDurationReached) {
          answrita1Clock.add(answrita1MaxDuration);
      } else {
          answrita1Clock.add(15.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var thanksMaxDurationReached;
var thanksMaxDuration;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'thanks' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      thanksClock.reset(routineTimer.getTime());
      routineTimer.add(10.000000);
      thanksMaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('thanks.started', globalClock.getTime());
      thanksMaxDuration = null
      // keep track of which components have finished
      thanksComponents = [];
      thanksComponents.push(text);
      
      for (const thisComponent of thanksComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function thanksRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'thanks' ---
      // get current time
      t = thanksClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text* updates
      if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text.tStart = t;  // (not accounting for frame time here)
        text.frameNStart = frameN;  // exact frame index
        
        text.setAutoDraw(true);
      }
      
      
      // if text is active this frame...
      if (text.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text.tStop = t;  // not accounting for scr refresh
        text.frameNStop = frameN;  // exact frame index
        // update status
        text.status = PsychoJS.Status.FINISHED;
        text.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of thanksComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function thanksRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'thanks' ---
      for (const thisComponent of thanksComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (thanksMaxDurationReached) {
          thanksClock.add(thanksMaxDuration);
      } else {
          thanksClock.add(10.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var rtertgeMaxDurationReached;
var rtertgeMaxDuration;
var rtertgeComponents;
function rtertgeRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'rtertge' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      rtertgeClock.reset(routineTimer.getTime());
      routineTimer.add(1.000000);
      rtertgeMaxDurationReached = false;
      // update component parameters for each repeat
      // Disable downloading results to browser 
      psychoJS._saveResults = 0; 
      // Generate filename for results 
      let filename = psychoJS._experiment._experimentName + '_' + 
      psychoJS._experiment._datetime + '.csv'; 
      // Extract data object from experiment 
      let dataObj = psychoJS._experiment._trialsData; 
      // Convert data object to CSV 
      let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => { 
      return Object.values(it).toString() 
      }).join('\n') 
      // Send data to OSF via DataPipe 
      console.log('Saving data...'); 
      fetch('https://pipe.jspsych.org/api/data', { 
      method: 'POST', 
      headers: { 
      'Content-Type': 'application/json', 
      Accept: '*/*', 
      }, 
      body: JSON.stringify({ 
      experimentID: 'nbACxpsSggdz', // * обновить, указав experiment ID из DATAPIPE на шаге 4.3 * 
      filename: filename,  
      data: data, 
      }), 
      }).then(response => response.json()).then(data => { 
      // Log response aud force experiment end 
      console.log(data); 
      quitPsychoJS(); 
      }) 
      psychoJS.experiment.addData('rtertge.started', globalClock.getTime());
      rtertgeMaxDuration = null
      // keep track of which components have finished
      rtertgeComponents = [];
      rtertgeComponents.push(text_3);
      
      for (const thisComponent of rtertgeComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function rtertgeRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'rtertge' ---
      // get current time
      t = rtertgeClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_3* updates
      if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_3.tStart = t;  // (not accounting for frame time here)
        text_3.frameNStart = frameN;  // exact frame index
        
        text_3.setAutoDraw(true);
      }
      
      
      // if text_3 is active this frame...
      if (text_3.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_3.tStop = t;  // not accounting for scr refresh
        text_3.frameNStop = frameN;  // exact frame index
        // update status
        text_3.status = PsychoJS.Status.FINISHED;
        text_3.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of rtertgeComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function rtertgeRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'rtertge' ---
      for (const thisComponent of rtertgeComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('rtertge.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (rtertgeMaxDurationReached) {
          rtertgeClock.add(rtertgeMaxDuration);
      } else {
          rtertgeClock.add(1.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
function importConditions(currentLoop) {
    return async function () {
      psychoJS.importAttributes(currentLoop.getCurrentTrial());
      return Scheduler.Event.NEXT;
      };
  }
  
  
async function quitPsychoJS(message, isCompleted) {
    // Check for and save orphaned data
    if (psychoJS.experiment.isEntryEmpty()) {
      psychoJS.experiment.nextEntry();
    }
    psychoJS.window.close();
    psychoJS.quit({message: message, isCompleted: isCompleted});
    
    return Scheduler.Event.QUIT;
  }
