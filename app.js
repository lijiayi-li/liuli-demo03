// 内容集中配置：展品始终占位；通用工艺资料不代表某件展品的制作档案。
const GAME_CONTENT = {
  title: '火中的秘密', subtitle: '琉璃作坊调查', identity: '见习观技人',
  opening: '走近三处展品，看看形态怎样形成，颜色又从哪里来。',
  disclaimer: '调查情境为虚构，展品信息与工艺解释将在核实后提供。',
  mapLabel: '示意地图，待现场调研替换',
  notesEmpty: '完成调查后，你的观察和制作线索会保存在这里。',
  steps: ['观察实物', '操作示意', '看见变化', '留下记录'],
  schematic: '原创简化工艺示意，非真实加工模拟。',
  source: '陈梦婷等，2026，《火中取艺》',
  sourceNotice: '通用工艺资料；不代表占位展品的原始制作档案。不模拟真实温度、加工时长或成品配色。',
  observationLabels: { unconfirmed: '尚未确认', reported: '玩家自述已观看', unclear: '看不清' },
  observationDisclaimer: '观看状态为玩家自述，系统未验证现场观看，也不推断具体观察结果。',
  // 填入真实照片前请核对使用权限；verified 只在对应资料核对后改为 true。
  // label 为已确认的展签文字；explanationScope: general / exclusive。
  exhibits: {
    lamp: { id: '待现场核实', name: '灯工作品〔待现场核实〕', location: '待现场核实', label: '待现场核实', photo: null, photoAlt: '', parts: [], observation: '先寻找展签或可靠资料明确标注灯工的作品；具体观察部位待现场确认。', explanation: '预制料棒、局部火焰与小工具塑形', explanationScope: 'general', explanationSource: '对应作品资料待现场核实；通用来源见关联案例', verified: false },
    furnace: { id: '待现场核实', name: '炉工吹制器皿〔待现场核实〕', location: '待现场核实', label: '待现场核实', photo: null, photoAlt: '', parts: [], observation: '寻找有可靠资料明确说明炉工吹制的器皿；瓶身与瓶颈提示仅在实物适用时使用。', explanation: '炉中挑料、吹制与回温后的继续塑形', explanationScope: 'general', explanationSource: '对应作品资料待现场核实；通用来源见关联案例', verified: false },
    color: { id: '待现场核实', name: '彩色琉璃作品〔待现场核实〕', location: '待现场核实', label: '待现场核实', photo: null, photoAlt: '', parts: [], observation: '找到这件作品，看看它的颜色和质感。当前对应作品待现场核实。', explanation: '相关制作案例中的材料线索', explanationScope: 'general', explanationSource: '对应作品资料待现场核实；通用来源见关联案例', verified: false },
    colorYellow: { id: '待现场核实', name: '鸡油黄候选作品〔待现场核实〕', location: '待现场核实', label: '待现场核实', photo: null, photoAlt: '', parts: [], observation: '待提供展签明确标注鸡油黄的作品。未核实前仅作资料拓展。', explanation: '当代鸡油黄制作中使用镉黄着色剂的案例', explanationScope: 'general', explanationSource: '对应作品资料待现场核实；通用来源见关联案例', verified: false },
    colorBlue: { id: '待现场核实', name: '另一件彩色候选作品〔待现场核实〕', location: '待现场核实', label: '待现场核实', photo: null, photoAlt: '', parts: [], observation: '待提供有颜色、色料或制作资料支持的彩色作品。未核实前仅作资料拓展。', explanation: '古代蓝色玻璃研究样品的铜相关成分线索', explanationScope: 'general', explanationSource: '对应作品资料待现场核实；通用来源见关联案例', verified: false }
  },
  recognition: {
    L1: { correct: '灯工', conclusion: '这组制作方式属于灯工。', yes: '料棒＋局部火焰加热，是本例的关键线索。', other: '本例使用的是预制料棒与局部火焰。请看材料从哪里来。' },
    L2: { correct: '炉工', conclusion: '这是炉工吹制的一种成型过程。', yes: '从炉中挑取熔融料，再用吹杆加工，是本例的关键线索。', other: '本例从炉中挑料，再进行吹杆操作。回看材料来源与加工方式。' }
  },
  tasks: [
    { id: 'L1', title: '一处细节怎样成形', exhibits: ['lamp'],
      observation: '看看这件作品的一处细节，它有哪些弯曲、伸展或连接的形态？',
      notice: '尚未核实的部位不作为真实观察对象。',
      relation: '本例属于灯工：从预制料棒与局部火焰加热开始，小工具操作调整形态。成品细节本身不能证明全部制作步骤。',
      uncertain: '对应展品的具体部件、连接过程与实际制作步骤，仍需制作资料确认。',
      required: ['heat', 'tool'],
      clues: [
        { id: 'heat', title: '局部加热', text: '预制琉璃料棒的加工区域经局部火焰加热后软化。' },
        { id: 'tool', title: '工具调整', text: '加热改变材料状态，工具操作调整形态。' }
      ]
    },
    { id: 'L2', title: '一件器形怎样形成', exhibits: ['furnace'],
      observation: '看看瓶身与瓶颈，想一想它们的形态怎样形成。',
      notice: '不要求从实物外部看清内部空腔，也不凭外观确定吹制。',
      relation: '本例属于炉工吹制：从炉中挑取熔融料，吹气帮助形成中空形态；回温恢复加工状态，后续操作调整形态。灯工从料棒与局部火焰开始，本例炉工从炉中挑料与吹杆加工开始；不能只看成品大小。吹制不代表全部炉工操作。',
      uncertain: '占位作品的具体操作顺序与形态形成过程，仍需对应制作资料核实。',
      required: ['blow', 'warm', 'neck'],
      clues: [
        { id: 'blow', title: '吹杆与吹气', text: '向附着尚可塑形料体的中空吹杆内吹气，可以帮助形成中空形态。' },
        { id: 'warm', title: '回温', text: '琉璃料冷却后较难塑形；回温使料体恢复适合继续加工的状态。' },
        { id: 'neck', title: '继续塑形', text: '回温后仍需要工具操作调整瓶颈，不会自动形成目标形态。' }
      ]
    },
    { id: 'L3', title: '颜色背后的材料', exhibits: ['color'],
      observation: '作坊里收藏着不同的琉璃色料。打开色料柜，看看美丽的颜色背后，留下了哪些材料线索。',
      notice: '对应展品：待现场核实。',
      relation: '着色材料可以参与颜色形成；色料名称不是单一原料名称，成品颜色还与配方和加工条件有关。',
      uncertain: '尚不能确定现场展品的具体着色材料与配方。',
      required: [], clues: []
    }
  ],
  cabinet: {
    illustrationNotice: '示意，颜色与质感不代表真实样品的精确呈现。',
    conceptNotice: '概念演示，不是配方或实际加工模拟。',
    contextNotice: '两个案例资料类型与年代不同，不假设采用相同制作背景。',
    discovery: '你发现了：颜色背后可以有材料线索，但颜色名称本身不是完整配方。',
    art: {
      swatchPath: 'M65 16Q76 13 87 16L86 35C86 45 107 46 110 66C114 87 38 87 42 66C45 46 66 45 66 35Z',
      yellow: { light: '#fff0a0', base: '#e4b334', dark: '#b67d22' },
      blue: { light: '#b1deea', base: '#438daa', dark: '#28617d' },
      icons: {
        base: '<path d="M22 35h28v28H22zM63 24h24v24H63zM68 60h21v17H68z"/>',
        material: '<rect x="16" y="30" width="88" height="42" rx="6"/><path d="M25 40h70"/>',
        object: '<path d="M50 15h20v27c0 8 25 13 25 33H25c0-20 25-25 25-33Z"/>',
        eye: '<path d="M10 50Q60 8 110 50Q60 92 10 50Z"/><circle cx="60" cy="50" r="15"/>',
        analysis: '<rect x="22" y="24" width="44" height="52" rx="4"/><circle cx="79" cy="45" r="17"/><path d="m91 58 17 18M33 39h20M33 53h15"/>',
        evidence: '<rect x="26" y="20" width="66" height="66" rx="4"/><path d="M40 37h37M40 50h37M40 63h22"/>'
      }
    },
    cases: [
      { id: 'yellow', exhibitKey: 'colorYellow', shortMaterial: '有当代制作记录使用镉黄着色剂。', name: '鸡油黄', type: '博山地方色料案例', era: '当代制作 · 2020年研究',
        introduction: '博山琉璃的代表性色料之一。',
        colorExplanation: '“鸡油黄”是色料或品类名称，不是将鸡油加入琉璃的配方说明。',
        material: '邓翰宇（2020）的研究记录了当代鸡油黄制作中使用镉黄着色剂的情况。',
        materialIconLabel: '镉黄着色剂（名称图标，原料形态未确认）',
        source: '邓翰宇，2020，《地方性工艺文化产业研究——以山东博山“鸡油黄”琉璃为例》，印刷页59—60。',
        action: '播放颜色形成示意',
        steps: [{ icon: 'material', text: '玻璃基础材料与相关配料' }, { icon: 'material', text: '着色成分参与熔制' }, { icon: 'swatch', text: '彩色琉璃' }],
        feedback: '这份资料展示了一个制作案例。鸡油黄的具体配方并非始终不变，也不能仅凭颜色认定某件展品使用了相同材料。',
        explanation: '着色成分可参与颜色形成；“鸡油黄”不是单一原料或完整配方名称。成品颜色还与配方和加工条件有关。',
        uncertain: '尚不能确定对应现场展品的具体配方、着色剂及制作条件。'
      },
      { id: 'blue', exhibitKey: 'colorBlue', shortMaterial: '铜相关成分可以参与某些蓝色玻璃的着色。', name: '蓝色玻璃', type: '博山古代样品研究案例', era: '12—14世纪样品 · 2024年研究',
        introduction: '材料分析中的蓝色玻璃样品案例。',
        colorExplanation: '示意蓝色不代表真实研究样品的精确颜色，也不能代替材料检测。',
        material: 'Zhou等（2024）对博山古代玻璃样品进行分析，发现蓝色样品具有较高的铜相关成分，并讨论了其着色材料来源。',
        source: 'Zhou等，2024，Glassmaking remains from the 12th to 14th centuries CE glass workshop in Boshan, Shandong Province, China，Section 5.2。',
        sourceUrl: 'https://doi.org/10.1016/j.jasrep.2023.104289',
        action: '展开材料分析线索',
        steps: [{ icon: 'material', text: '玻璃基础材料与相关配料' }, { icon: 'material', text: '着色成分参与熔制' }, { icon: 'swatch', text: '彩色琉璃' }],
        feedback: '材料分析可以帮助解释颜色形成。这个研究样品的结论不能直接套用到馆内任意蓝色作品。',
        explanation: '结合材料分析与其他证据，可以讨论样品的着色来源；铜相关成分并不意味着铜只会形成蓝色。',
        uncertain: '尚不能确定馆内蓝色作品是否使用相同材料、配方或加工条件。'
      }
    ]
  },
  demonstrations: {
    rod: '预制料棒 · 加工区域尚未软化',
    soft: '局部加热 · 仅加工部位软化，形态尚未调整',
    bent: '工具调整 · 软化区域发生简化弯曲',
    gather: '从炉中挑取熔融料，附着于中空吹杆 · 吹气前',
    hollow: '吹气后 · 料体膨胀，形成中空形态（剖面示意）',
    cold: '材料冷却 · 瓶颈尚需调整',
    warm: '回温后 · 适合继续塑形，瓶颈保持原形',
    neck: '工具操作后 · 瓶颈形态发生变化'
  }
};

// 仅用内存。演示历史和活动完成与知识掌握分离；笔记按任务 ID 更新，不重复追加。
const createState = () => ({ started: false, phase: 0, observation: 'unconfirmed', seen: new Set(), written: false, lampStage: 'rod', blowStage: 'gather', neckStage: 'cold', attemptedCold: false, staticPanels: new Set(), paused: false, transition: null, activeDrawer: null, viewedCases: new Set(), collectedCases: new Set(), drawerStates: Object.fromEntries(GAME_CONTENT.cabinet.cases.map(item => [item.id, { openCards: new Set(), played: false }])), cabinetMotion: false, craftLabel: null, compareMode: 'furnace' });
const session = Object.fromEntries(GAME_CONTENT.tasks.map(task => [task.id, createState()]));
const notes = new Map();
const app = document.querySelector('#app');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const e = value => String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
const taskById = id => GAME_CONTENT.tasks.find(task => task.id === id);
const taskStatus = id => session[id].written ? '已完成调查' : session[id].started ? '调查中' : '待查明';
const readyToRecord = id => taskById(id).required.every(key => session[id].seen.has(key));
const back = '<a class="button secondary return-map" href="#map">← 返回地图</a>';
let animations = [];

// 原创 SVG；颜色表达示意状态，不表示真实配色。热状态帧不改变几何轮廓。
function drawing(kind) {
  let shapes = '';
  if (['rod', 'soft', 'bent'].includes(kind)) {
    const path = kind === 'bent' ? 'M35 60H137q22 0 30-18l15-24' : 'M35 60H187';
    shapes = `<path d="M35 60H135" stroke="#8bbfc9" stroke-width="12"/><path class="glass-shape" d="${path}" stroke="#8bbfc9" stroke-width="12"/><path d="${kind === 'bent' ? 'M137 60q22 0 30-18l15-24' : 'M135 60H187'}" stroke="${kind === 'rod' ? '#8bbfc9' : '#e0b56a'}" stroke-width="12"/><path d="M35 57H130" stroke="#e8f4f1" stroke-width="2"/>`;
    if (kind !== 'rod') shapes += '<path d="M151 104c-15-15 2-22 7-31 0 8 6 8 8 12 5 10 0 20-15 19Z" fill="#edc57a" stroke="#97651c"/><path d="M148 112h19" stroke="#65787d" stroke-width="5"/>';
    if (kind === 'bent') shapes += '<path d="m214 19-28 12 3 12m29-15-28 10 3 11" stroke="#715389" stroke-width="4"/>';
  } else if (['gather', 'hollow'].includes(kind)) {
    const expanded = kind === 'hollow';
    shapes = '<path d="M18 57h126v9H18Z" fill="#b9c7cb" stroke="#536b71"/><path d="M18 61h126" stroke="#fffdf7" stroke-width="2"/>';
    if (!expanded) shapes += '<path d="M201 26h36v77h-30V82h18V48h-24Z" fill="#d1c8b5" stroke="#837761"/><path d="M206 52h16v25h-16" fill="#efcf8f" stroke="#97651c"/><text x="218" y="119" fill="#233b3c" stroke="none" font-size="10" text-anchor="middle">炉中挑料</text>';
    shapes += `<ellipse class="glass-shape" cx="${expanded ? 174 : 159}" cy="61" rx="${expanded ? 38 : 23}" ry="${expanded ? 42 : 27}" fill="#e6c782" stroke="#97651c" stroke-width="2"/>`;
    if (expanded) shapes += '<ellipse cx="174" cy="61" rx="27" ry="30" fill="#fffdf7" stroke="#97651c" stroke-dasharray="4 3"/><path class="air-flow" d="M28 61h144m-10-7 10 7-10 7" stroke="#26768a" stroke-width="3"/><path d="M189 94h30" stroke="#536b71"/><text x="203" y="112" fill="#233b3c" stroke="none" font-size="10" text-anchor="middle">中空</text>';
  } else {
    const bottle = kind === 'neck' ? 'M112 18h20v27c0 10 31 17 31 42 0 27-82 27-82 0 0-25 31-32 31-42Z' : 'M106 18h32l-6 27c0 10 31 17 31 42 0 27-82 27-82 0 0-25 31-32 31-42Z';
    shapes = `<path class="glass-shape" d="${bottle}" fill="${kind === 'cold' ? '#c9dce0' : '#edd49a'}" stroke="#536b71" stroke-width="2"/>`;
    if (kind === 'warm') shapes += '<path d="M66 83c-15-17 14-23 0-42m112 42c15-17-14-23 0-42" stroke="#97651c" stroke-width="2" stroke-dasharray="4 3"/>';
    if (kind === 'neck') shapes += '<path d="m173 12-35 19 7 13m37-20-40 14 7 14" stroke="#715389" stroke-width="4"/>';
  }
  return `<g fill="none" stroke-linecap="round" stroke-linejoin="round">${shapes}</g>`;
}
function demoImage(kind, previous = null) {
  return `<svg class="demo-svg" viewBox="0 0 244 130" role="img" aria-label="${e(GAME_CONTENT.demonstrations[kind])}">${previous && !reducedMotion.matches ? `<g class="transition-from">${drawing(previous)}</g>` : ''}<g class="${previous && !reducedMotion.matches ? 'transition-to' : ''}">${drawing(kind)}</g></svg>`;
}
function figure(kind, title = GAME_CONTENT.demonstrations[kind]) {
  return `<figure class="visual-frame">${demoImage(kind)}<figcaption>${e(title)}</figcaption></figure>`;
}
function sourcePanel(task) {
  const clues = task.id === 'L3' ? '' : task.clues.map(clue => `<p><strong>${e(clue.title)}：</strong>${e(clue.text)}</p>`).join('');
  return `<details class="clue-card" data-source><summary>进一步解释与资料依据</summary><div>${clues}<p class="hint">${e(GAME_CONTENT.sourceNotice)}</p><p class="hint">资料依据：${e(GAME_CONTENT.source)}</p></div></details>`;
}
function observationControl(state) {
  return `<label class="choice observation-check"><input type="checkbox" id="observed" ${state.observation === 'reported' ? 'checked' : ''}><span>我已在现场观看对应展品（可选）</span></label><p class="hint">${e(GAME_CONTENT.observationDisclaimer)}</p><p class="hint" id="observation-status">现场观察状态：${e(GAME_CONTENT.observationLabels[state.observation])}</p>`;
}
function exhibit(key) {
  const x = GAME_CONTENT.exhibits[key];
  const photo = x.verified && x.photo;
  return `<section class="card exhibit-entry" data-exhibit="${key}">${photo ? `<figure class="real-exhibit"><img src="${e(x.photo)}" alt="${e(x.photoAlt || x.name)}"><figcaption>现场展品照片 · 用于辨认实物，非工艺示意</figcaption></figure>` : `<div class="exhibit-image" role="img" aria-label="展品照片尚未提供，辨认图待现场核实"><span class="placeholder-symbol" aria-hidden="true">◇</span><strong>展品照片占位 · 待现场核实</strong><small>不是展品照片，也不代表真实作品形态</small></div>`}<p class="exhibit-caption">${e(x.name)}</p><dl class="exhibit-facts"><dt>展品编号</dt><dd>${e(x.id)}</dd><dt>所在位置</dt><dd>${e(x.location)}</dd><dt>展签工艺／色料名称</dt><dd>${e(x.label)}</dd><dt>核实状态</dt><dd>${x.verified ? '已核实' : '待现场核实'}</dd></dl><p>${e(x.observation)}</p><p class="hint">解释类型：${x.explanationScope === 'exclusive' && x.verified ? '作品专属资料（需已核对来源）' : '通用工艺／材料案例，不是本展品制作档案'}</p></section>`;
}
function recognition(id) {
  const state = session[id], c = GAME_CONTENT.recognition[id];
  return `<section class="recognition"><h3>${e(c.conclusion)}</h3><p>给这段演示贴一个工艺标签（可选）</p><div class="operation-buttons">${['灯工','炉工'].map(label => `<button class="button secondary" data-action="label" data-label="${label}" aria-pressed="${state.craftLabel === label}">${label}</button>`).join('')}</div>${state.craftLabel ? `<p class="feedback" role="status">${e(state.craftLabel === c.correct ? c.yes : c.other)}</p>` : ''}<details class="clue-card"><summary>直接查看解释</summary><div><p>${e(c.yes)}</p></div></details><p class="hint">无需选择或答对即可继续；不扣分。</p></section>`;
}
function processComparison(state) {
  const lamp = state.compareMode === 'lamp';
  const kinds = lamp ? ['rod','soft','bent'] : ['gather','hollow','warm','neck'];
  return `<section class="card process-comparison"><h2>材料从哪里来？怎样加工？</h2><div class="comparison-tabs">${[['lamp','刚才的灯工'],['furnace','本例的炉工']].map(([key,label]) => `<button class="button secondary" data-action="compare" data-mode="${key}" aria-pressed="${state.compareMode === key}">${label}</button>`).join('')}</div><div class="static-frames comparison-process">${kinds.map(kind => figure(kind)).join('')}</div><p>${lamp ? '料棒 → 局部火焰 → 小工具调整' : '炉中挑料 → 吹杆操作 → 回温与继续塑形'}</p><button class="button secondary" data-action="compare-replay">重播这段过程</button><button class="button secondary next-task" data-action="pause" ${reducedMotion.matches ? 'disabled' : ''}>${reducedMotion.matches ? '静态过程图' : state.paused ? '继续动画' : '暂停动画'}</button><p class="hint">区别主要看材料与加工方式，不能只看成品大小。吹制是本关采用的炉工示例，不代表全部炉工操作。</p>${recognition('L2')}</section>`;
}
function track(phase) {
  return `<ol class="step-track" aria-label="调查流程">${GAME_CONTENT.steps.map((label, index) => `<li ${index === phase ? 'aria-current="step"' : ''}><span class="step-label">${e(label)}</span>${index < 3 ? '<b aria-hidden="true">→</b>' : ''}</li>`).join('')}</ol>`;
}
function motionControls(panel, state) {
  const canReplay = panel === 'lamp' ? state.lampStage !== 'rod' : panel === 'blow' ? state.blowStage !== 'gather' : state.neckStage !== 'cold';
  return `<div class="demo-controls"><button class="button secondary" data-action="pause" ${reducedMotion.matches ? 'disabled' : ''}>${reducedMotion.matches ? '系统已减少动态效果' : state.paused ? '继续动画' : '暂停动画'}</button><button class="button secondary" data-action="replay" data-panel="${panel}" ${canReplay ? '' : 'disabled'}>重播当前变化</button><button class="button secondary" data-action="reset" data-panel="${panel}">从头操作</button><button class="button secondary" data-action="static" data-panel="${panel}">查看静态步骤</button></div>`;
}
function staticFrames(panel) {
  const kinds = panel === 'lamp' ? ['rod', 'soft', 'bent'] : panel === 'blow' ? ['gather', 'hollow'] : ['cold', 'warm', 'neck'];
  return `<div class="static-frames">${kinds.map(kind => figure(kind)).join('')}</div>`;
}
function showStatic(panel, state) {
  return state.staticPanels.has(panel) || reducedMotion.matches;
}
function recordButton(id, label = '加入调查笔记') {
  const state = session[id];
  return `<button class="button primary next-task" data-action="record" ${readyToRecord(id) ? '' : 'disabled'}>${state.written ? '更新调查笔记' : label}</button>${!readyToRecord(id) ? '<p class="hint">先操作关键示意，或查看静态步骤，再留下记录；无需作答。</p>' : ''}`;
}
function noteCard(id) {
  const task = taskById(id), note = notes.get(id);
  if (!note) return '';
  if (id === 'L3') return cabinetNote();
  return `<section class="card investigation-note" data-note="${id}"><span class="eyebrow ${session[id].written ? 'completion-stamp' : ''}">${session[id].written ? '✓ ' + id + ' / 已完成调查' : id + ' / 线索草稿'}</span><h2>${e(task.title)}</h2><dl><dt>对应展品</dt><dd>${task.exhibits.map(key => e(GAME_CONTENT.exhibits[key].name)).join("；")}</dd><dt>现场观察状态（玩家自述）</dt><dd>${e(GAME_CONTENT.observationLabels[note.observation])}</dd><dt>查阅的工艺线索</dt><dd>${note.clues.length ? note.clues.map(e).join('；') : '尚未单独查阅工艺线索。'}</dd><dt>演示解释的关系</dt><dd>${e(task.relation)}</dd><dt>仍需确认</dt><dd>${e(task.uncertain)}</dd></dl><p class="hint">${e(GAME_CONTENT.observationDisclaimer)}</p>${sourcePanel(task)}</section>`;
}
function writeNote(id) {
  if (!readyToRecord(id)) return;
  const state = session[id], task = taskById(id);
  const clues = task.clues.filter(item => state.seen.has(item.id)).map(item => item.text);
  notes.set(id, { observation: state.observation, clues });
  state.written = true;
  state.phase = id === 'L3' ? 4 : 3;
}
function lampPanel(state) {
  const previous = state.transition?.panel === 'lamp' ? state.transition.previous : null;
  return `<h2>让加工区域发生变化</h2><p>预制料棒 → 局部火焰加热 → 小工具塑形</p><p class="hint">加工区域的暖色强调仅表示材料状态，不表示成品着色。</p><div class="demo-stage">${demoImage(state.lampStage, previous)}</div><p class="feedback" role="status">${e(GAME_CONTENT.demonstrations[state.lampStage])}</p><button class="button primary" data-action="heat" ${state.lampStage !== 'rod' ? 'disabled' : ''}>局部加热</button>${state.lampStage !== 'rod' ? '<button class="button primary next-task" data-action="tool">工具调整</button>' : '<p class="hint">加热加工区域后，再用工具调整。</p>'}${motionControls('lamp', state)}${showStatic('lamp', state) ? staticFrames('lamp') : ''}<p class="hint">${e(GAME_CONTENT.schematic)}</p>`;
}
function blowPanel(state) {
  const previous = state.transition?.panel === 'blow' ? state.transition.previous : null;
  return `<h2>炉工吹制：从炉中挑料开始</h2><p class="hint">炉中熔融料 → 挑料并附着于吹杆 → 吹气成型</p><div class="demo-stage">${demoImage(state.blowStage, previous)}</div><p class="feedback" role="status">${e(GAME_CONTENT.demonstrations[state.blowStage])}</p><button class="button primary" data-action="blow">演示吹气</button><p>向吹杆内吹气，可以帮助尚可塑形的料体形成中空形态。这是炉工吹制的一种成型过程。</p><button class="button secondary" data-action="static" data-panel="blow">前后对照</button>${motionControls('blow', state)}${showStatic('blow', state) ? staticFrames('blow') : ''}<p class="hint">${e(GAME_CONTENT.schematic)}虚线表示剖面空腔，不表示可以从实物外部直接看见。</p>`;
}
function neckPanel(state) {
  const previous = state.transition?.panel === 'neck' ? state.transition.previous : null;
  return `<h2>回温后，接着调整</h2><div class="demo-stage">${demoImage(state.neckStage, previous)}</div><p class="feedback" role="status">${state.attemptedCold && state.neckStage === 'cold' ? '当前材料状态较难塑形，示意保持原形。' : e(GAME_CONTENT.demonstrations[state.neckStage])}</p><div class="operation-buttons"><button class="button secondary" data-action="adjust">${state.neckStage === 'cold' ? '尝试调整' : '调整瓶颈'}</button><button class="button primary" data-action="warm" ${state.neckStage !== 'cold' ? 'disabled' : ''}>回温</button></div><p>回温恢复适合加工的状态，形态仍需后续操作调整。</p>${motionControls('neck', state)}${showStatic('neck', state) ? staticFrames('neck') : ''}<p class="hint">${e(GAME_CONTENT.schematic)}</p>`;
}
const caseById = id => GAME_CONTENT.cabinet.cases.find(item => item.id === id);
function cabinetSwatch(id, prefix = 'drawer') {
  const c = GAME_CONTENT.cabinet, item = caseById(id), palette = c.art[id];
  const key = `${prefix}-${id}`;
  return `<svg class="cabinet-swatch" viewBox="0 0 152 106" role="img" aria-label="${e(item.name)}原创示意样片，颜色与质感不代表真实样品的精确呈现"><defs><linearGradient id="${key}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${palette.light}"/><stop offset=".55" stop-color="${palette.base}"/><stop offset="1" stop-color="${palette.dark}"/></linearGradient></defs><ellipse cx="76" cy="86" rx="43" ry="7" fill="#233b3c" opacity=".08"/><path d="${c.art.swatchPath}" fill="url(#${key})" stroke="${palette.dark}" stroke-width="1.3"/><path d="M69 20Q76 18 83 20M62 48C51 57 48 64 50 70" stroke="#fffdf7" opacity=".65" fill="none" stroke-width="3" stroke-linecap="round"/><path d="M49 76Q76 85 103 76" stroke="${palette.light}" opacity=".6" fill="none"/></svg>`;
}
function cabinetIcon(icon, id, index) {
  if (icon === 'swatch') return cabinetSwatch(id, 'process-' + index);
  const color = GAME_CONTENT.cabinet.art[id].dark;
  return `<svg class="cabinet-icon" viewBox="0 0 120 100" aria-hidden="true" fill="#f5f0df" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${GAME_CONTENT.cabinet.art.icons[icon]}</svg>`;
}
function cabinetSource(item) {
  return `<p class="hint paper-title">来源：${e(item.source)}</p>${item.sourceUrl ? `<a class="source-link" href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer">查看论文来源 ↗</a>` : ''}`;
}
function cabinetSequence(item) {
  return `<div class="cabinet-sequence">${item.steps.map((step, index) => `<figure class="cabinet-step" data-step="${index}">${cabinetIcon(step.icon, item.id, index)}<figcaption><b>${index + 1}.</b> ${e(step.text)}</figcaption></figure>${index < item.steps.length - 1 ? '<span class="sequence-arrow" aria-hidden="true">↓</span>' : ''}`).join('')}</div>${item.id === 'yellow' ? `<figure class="final-swatch">${cabinetSwatch('yellow', 'final')}<figcaption>黄色琉璃示意 · 不是某件真实样品或展品</figcaption></figure>` : ''}<p class="hint concept-notice">${e(GAME_CONTENT.cabinet.conceptNotice)}</p><p class="feedback">${e(item.feedback)}</p>`;
}
function collectCabinetCase(id) {
  session.L3.collectedCases.add(id);
  notes.set('L3', { observation: session.L3.observation, cases: GAME_CONTENT.cabinet.cases.filter(item => session.L3.collectedCases.has(item.id)).map(item => item.id) });
}
function cabinetNote() {
  const note = notes.get('L3');
  if (!note) return '';
  return `<section class="card investigation-note" data-note="L3"><span class="eyebrow ${session.L3.written ? 'completion-stamp' : ''}">${session.L3.written ? '✓ L3 / 已完成调查' : 'L3 / 已收藏线索 · 调查中'}</span><h2>颜色背后的材料</h2><p class="hint">现场观察状态：${e(GAME_CONTENT.observationLabels[note.observation])}。${e(GAME_CONTENT.observationDisclaimer)}</p>${note.cases.map(id => {
    const item = caseById(id);
    return `<article class="cabinet-case-note" data-case-note="${id}"><div class="case-note-top">${cabinetSwatch(id, 'note')}<div><h3>${e(item.name)}</h3><p class="hint">${e(item.type)}<br>${e(item.era)}</p></div></div><dl><dt>对应展品</dt><dd>${e(GAME_CONTENT.exhibits[item.exhibitKey].name)}</dd><dt>展签确认的色料名称</dt><dd>${e(GAME_CONTENT.exhibits[item.exhibitKey].label)}</dd><dt>资料案例名称</dt><dd>${e(item.name)}</dd><dt>是否专属于本展品</dt><dd>${GAME_CONTENT.exhibits[item.exhibitKey].verified && GAME_CONTENT.exhibits[item.exhibitKey].explanationScope === "exclusive" ? "已核实的作品专属资料" : "否，通用文献案例"}</dd><dt>文献中的材料线索</dt><dd>${e(GAME_CONTENT.exhibits[item.exhibitKey].verified && GAME_CONTENT.exhibits[item.exhibitKey].explanationScope === "exclusive" ? GAME_CONTENT.exhibits[item.exhibitKey].explanation : item.material)}</dd><dt>可以支持的解释</dt><dd>${e(item.explanation)}</dd><dt>尚不能确定的现场展品配方</dt><dd>${e(item.uncertain)}</dd></dl>${cabinetSource(item)}</article>`;
  }).join('')}<p class="hint">${e(GAME_CONTENT.cabinet.illustrationNotice)} ${e(GAME_CONTENT.cabinet.contextNotice)}</p></section>`;
}
function renderColorExhibits() {
  const state = session.L3, c = GAME_CONTENT.cabinet, task = taskById('L3');
  state.started = true;
  const item = caseById(state.activeDrawer);
  let content = '';
  if (state.phase === 0) {
    content = `${exhibit('color')}<p class="hint">未核实的颜色案例暂不作为正式现场站点。真实作品照片用于寻找实物，下面的原创图形只解释材料关系。</p>${observationControl(state)}<button class="button primary" data-cabinet="enter">查看材料演示</button><button class="button secondary next-task" data-cabinet="unclear">暂时找不到或看不清，继续看示意</button>`;
  } else {
    content = `<p>先回看对应展品，再查材料线索。</p><p class="hint">${e(c.contextNotice)} 没有可靠对应作品的案例，只能作为可选资料拓展。</p><div class="color-cabinet">${c.cases.map(value => { const x = GAME_CONTENT.exhibits[value.exhibitKey]; return `<button class="cabinet-drawer" data-cabinet="open" data-case="${value.id}" aria-expanded="${state.activeDrawer === value.id}">${cabinetSwatch(value.id,'handle')}<span class="drawer-label"><strong>${e(value.name)}</strong><small>${x.verified ? '已核实展品入口' : '可选资料拓展 · 对应展品待核实'}</small><small>${e(value.type)}</small><span class="drawer-state">${state.collectedCases.has(value.id) ? '✓ 已留下线索' : '查看展品与材料 →'}</span></span></button>`; }).join('')}</div><p class="hint">${e(c.illustrationNotice)}</p>`;
    if (item) {
      const detail = state.drawerStates[item.id], x = GAME_CONTENT.exhibits[item.exhibitKey];
      content += `<section class="card opened-drawer" data-drawer="${item.id}"><h2>${e(item.name)}</h2>${exhibit(item.exhibitKey)}<p class="hint">${e(item.era)}</p><p>${e(item.colorExplanation)}</p><p>${x.verified && x.explanationScope === 'exclusive' ? '这件作品的材料资料表明：' + e(x.explanation) : '相关制作案例中的材料线索：' + e(item.shortMaterial)}</p><p class="hint">${x.verified && x.explanationScope === 'exclusive' ? '作品专属解释须以已核对的制作／检测资料为依据。' : '眼前作品的具体配方尚未确认。颜色相似不能证明材料相同。'}</p><details class="clue-card"><summary>进一步解释与资料依据</summary><div><p>${e(item.material)}</p>${cabinetSource(item)}</div></details><button class="button primary" data-cabinet="play">看看颜色的材料线索</button>${detail.played ? `${cabinetSequence(item)}<div class="demo-controls"><button class="button secondary" data-cabinet="pause" ${reducedMotion.matches ? 'disabled' : ''}>${reducedMotion.matches ? '静态分步图' : state.paused ? '继续演示' : '暂停演示'}</button><button class="button secondary" data-cabinet="play">重播示意</button><button class="button secondary" data-cabinet="static">查看静态步骤</button></div><p class="hint">着色成分参与材料形成，不是在成品表面涂色；不表示一种材料只能形成一种颜色。</p><button class="button primary next-task" data-cabinet="collect">${state.collectedCases.has(item.id) ? '✓ 已留下 · 更新这条颜色线索' : '留下这条颜色线索'}</button>` : '<p class="hint">查看概念演示后可留下这条线索，无需作答。</p>'}</section>`;
    }
    content += `<button class="button secondary next-task" data-cabinet="back-entry">回看展品入口</button>${state.collectedCases.size ? '<button class="button primary next-task" data-cabinet="finish">完成颜色调查</button>' : ''}<p class="hint">只记录实际查看并留下的案例，不要求补齐所有颜色。</p>`;
  }
  app.innerHTML = `<div class="page-top"><a class="back-link" href="#map">← 地图</a><span class="folio">L3 / ${taskStatus('L3')}</span></div><span class="eyebrow">现场展品 · 材料线索</span><h1>${e(task.title)}</h1>${content}${back}`;
  app.querySelector('#observed')?.addEventListener('change', event => {
    state.observation = event.target.checked ? 'reported' : 'unconfirmed';
    if (notes.has('L3')) notes.get('L3').observation = state.observation;
    app.querySelector('#observation-status').textContent = '现场观察状态：' + GAME_CONTENT.observationLabels[state.observation];
  });
  app.querySelectorAll('[data-cabinet]').forEach(button => button.addEventListener('click', () => {
    const action = button.dataset.cabinet;
    if (action === 'pause') {
      state.paused = !state.paused;
      animations.forEach(animation => state.paused ? animation.pause() : animation.play());
      button.textContent = state.paused ? '继续演示' : '暂停演示';
      return;
    }
    if (action === 'enter' || action === 'unclear') { state.phase = 1; if (action === 'unclear') {state.observation = 'unclear'; if(notes.has('L3')) notes.get('L3').observation = 'unclear';} }
    if (action === 'back-entry') state.phase = 0;
    if (action === 'open') { state.activeDrawer = button.dataset.case; state.viewedCases.add(state.activeDrawer); }
    if ((action === 'play' || action === 'static') && item) { state.drawerStates[item.id].played = true; state.paused = false; state.cabinetMotion = action === 'play'; }
    if (action === 'collect' && item && state.drawerStates[item.id].played) collectCabinetCase(item.id);
    if (action === 'finish' && state.collectedCases.size) { state.written = true; location.hash = 'ending'; return; }
    render(false);
    if (action === 'open') app.querySelector('.opened-drawer')?.scrollIntoView({block:'start',behavior:'instant'});
  }));
  if (state.cabinetMotion && !reducedMotion.matches) animations = [...app.querySelectorAll('.cabinet-step')].map((frame,index) => frame.animate([{opacity:.25,transform:'translateY(3px)'},{opacity:1,transform:'translateY(0)'}],{duration:500,delay:index*500,fill:'both'}));
  state.cabinetMotion = false;
}

function renderTask(id) {
  if (id === 'L3') { renderColorExhibits(); return; }
  const task = taskById(id), state = session[id];
  state.started = true;
  // 系统静态模式提供同样的关键步骤；观看静态分步图也是有效查阅。
  if (reducedMotion.matches && state.phase === 1 && id === 'L1') ['heat', 'tool'].forEach(key => state.seen.add(key));
  if (reducedMotion.matches && state.phase === 1 && id === 'L2') state.seen.add('blow');
  if (reducedMotion.matches && state.phase === 2 && id === 'L2') ['warm', 'neck'].forEach(key => state.seen.add(key));
  let content = '';
  if (state.phase === 0) {
    content = `<h2>观察实物</h2>${task.exhibits.map(exhibit).join('')}<p class="hint">${e(task.notice)}</p>${observationControl(state)}<button class="button primary" data-action="next">查看制作演示 →</button><button class="button secondary next-task" data-action="unclear">暂时找不到或看不清，继续看示意</button>`;
  } else if (state.phase === 1) {
    content = id === 'L1' ? lampPanel(state) : blowPanel(state);
    content += sourcePanel(task) + `<button class="button primary next-task" data-action="next">${id === 'L2' ? '继续查看回温与塑形' : '对照与记录'} →</button>`;
  } else if (state.phase === 2) {
    if (id === 'L1') {
      // 两张静态对照图展示两种作用，允许静态阅读后记录，不以操作速度或答题评价。
      ['heat', 'tool'].forEach(key => state.seen.add(key));
      content = `<h2>对照与记录</h2><div class="comparison-grid">${figure('soft', '材料状态变化：加工区域软化，形态尚未调整')}${figure('bent', '工具塑形：软化区域发生简化弯曲')}</div><p>${e(task.relation)}</p>${recognition("L1")}<p class="hint">${e(GAME_CONTENT.schematic)}</p><button class="button secondary" data-action="revisit" data-task="L1">回看制作示意</button>${sourcePanel(task)}${recordButton(id)}`;
    } else if (id === 'L2') {
      content = neckPanel(state) + sourcePanel(task) + processComparison(state) + recordButton(id) + `${!state.seen.has('blow') ? '<button class="button secondary next-task" data-action="previous">回看吹气前后对照</button>' : ''}`;

    }
  } else {
    content = `<h2>记录已留下</h2><p class="feedback" role="status">✓ ${id} 已完成调查。此状态只表示活动完成，不表示知识掌握。</p>${noteCard(id)}<button class="button secondary" data-action="revisit" data-task="${id}">回看${'制作示意'}</button><a class="button primary next-task" href="#${id === 'L1' ? 'L2' : id === 'L2' ? 'L3' : 'notes'}">${id === 'L1' ? '前往L2' : id === 'L2' ? '前往L3：颜色背后的材料' : '查看调查笔记'} →</a><p class="hint">仅保存在当前会话；刷新或关闭页面后清空。</p>`;
  }
  app.innerHTML = `<div class="page-top"><a class="back-link" href="#map">← 地图</a><span class="folio">${id} / ${taskStatus(id)}</span></div>${track(state.phase)}<h1>${e(task.title)}</h1><section class="card activity-current">${content}</section>${state.phase > 0 ? '<button class="button secondary previous-step" data-action="previous">← 返回上一步</button>' : ''}${back}`;
  bindTask(id);
  startTransition(state);
}
function startTransition(state) {
  if (!state.transition || reducedMotion.matches) { state.transition = null; return; }
  const from = app.querySelector('.transition-from'), to = app.querySelector('.transition-to');
  if (from && to) {
    animations = [from.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 1100, fill: 'forwards' }), to.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1100, fill: 'forwards' })];
    if (state.paused) animations.forEach(animation => animation.pause());
  }
  state.transition = null;
}
function transition(state, panel, field, target) {
  const previous = state[field];
  state[field] = target;
  state.paused = false;
  if (previous !== target) state.transition = { panel, previous };
}
function bindTask(id) {
  const state = session[id];
  app.querySelector('#observed')?.addEventListener('change', event => {
    state.observation = event.target.checked ? 'reported' : 'unconfirmed';
    if (notes.has(id)) notes.get(id).observation = state.observation;
    app.querySelector('#observation-status').textContent = '现场观察状态：' + GAME_CONTENT.observationLabels[state.observation];
  });
  app.querySelectorAll('[data-source]').forEach(panel => panel.addEventListener('toggle', () => {
    if (panel.isConnected && panel.open && id !== 'L3') taskById(id).clues.forEach(clue => state.seen.add(clue.id + '-source'));
  }));
  app.querySelectorAll('[data-action]').forEach(button => button.addEventListener('click', () => {
    const action = button.dataset.action, panel = button.dataset.panel;
    if (action === 'pause') {
      state.paused = !state.paused;
      animations.forEach(animation => state.paused ? animation.pause() : animation.play());
      button.textContent = state.paused ? '继续动画' : '暂停动画';
      button.setAttribute('aria-pressed', String(state.paused));
      return;
    }
    if (action === 'label') state.craftLabel = button.dataset.label;
    if (action === 'compare') state.compareMode = button.dataset.mode;
    if (action === 'compare' || action === 'compare-replay') state.paused = false;
    if (action === 'next') state.phase = Math.min(id === 'L3' ? 3 : 2, state.phase + 1);
    if (action === 'previous') state.phase = Math.max(0, state.phase - 1);
    if (action === 'unclear') { state.observation = 'unclear'; if (notes.has(id)) notes.get(id).observation = 'unclear'; state.phase = 1; }
    if (action === 'heat' && state.lampStage === 'rod') { state.seen.add('heat'); transition(state, 'lamp', 'lampStage', 'soft'); }
    if (action === 'tool' && state.lampStage !== 'rod') { state.seen.add('tool'); transition(state, 'lamp', 'lampStage', 'bent'); }
    if (action === 'blow') { state.seen.add('blow'); transition(state, 'blow', 'blowStage', 'hollow'); }
    if (action === 'warm' && state.neckStage === 'cold') { state.seen.add('warm'); transition(state, 'neck', 'neckStage', 'warm'); state.attemptedCold = false; }
    if (action === 'adjust') {
      if (state.neckStage === 'cold') state.attemptedCold = true;
      else { state.seen.add('neck'); transition(state, 'neck', 'neckStage', 'neck'); }
    }
    if (action === 'static') {
      state.staticPanels.add(panel);
      (panel === 'lamp' ? ['heat', 'tool'] : panel === 'blow' ? ['blow'] : ['warm', 'neck']).forEach(key => state.seen.add(key));
    }
    if (action === 'replay') {
      // 重播最后一次操作的变化；静态模式保留完整步骤图。
      const previous = panel === 'lamp' ? (state.lampStage === 'bent' ? 'soft' : 'rod') : panel === 'blow' ? 'gather' : (state.neckStage === 'neck' ? 'warm' : 'cold');
      const current = panel === 'lamp' ? state.lampStage : panel === 'blow' ? state.blowStage : state.neckStage;
      state.paused = false;
      if (previous !== current) state.transition = { panel, previous };
    }
    if (action === 'reset') {
      state.paused = false;
      if (panel === 'lamp') state.lampStage = 'rod';
      if (panel === 'blow') state.blowStage = 'gather';
      if (panel === 'neck') { state.neckStage = 'cold'; state.attemptedCold = false; }
      // 从头操作保留查阅历史和已留下的笔记，活动完成并非一次答题判定。
    }
    if (action === 'record') writeNote(id);
    if (action === 'revisit') { session[button.dataset.task].phase = 1; location.hash = button.dataset.task; }
    render(false);
    if ((action === 'compare' || action === 'compare-replay') && !reducedMotion.matches) {
      animations = [...app.querySelectorAll('.comparison-process figure')].map((frame,index) => frame.animate([{opacity:.2},{opacity:1}], {duration:650,delay:index*650,fill:'both'}));
      state.paused = false;
    }
    const focused = action === 'heat' ? app.querySelector('[data-action="tool"]') : app.querySelector(`[data-action="${action}"]`);
    focused?.focus({ preventScroll: true });
  }));
}

function render(resetScroll = true) {
  animations.forEach(animation => animation.cancel()); animations = [];
  const route = location.hash.slice(1) || 'intro';
  app.dataset.page = route;
  if (session[route]) renderTask(route);
  else if (route === 'map') {
    app.innerHTML = `<div class="page-top"><a class="back-link" href="#intro">← 开场</a><span class="folio">调查路线 / MAP</span></div><span class="eyebrow">从一处细节开始</span><h1>沿着线索，走近琉璃</h1><p class="hint">推荐顺序 L1 → L2 → L3，可自由进入与返回。</p><section class="card"><span class="map-label">${e(GAME_CONTENT.mapLabel)}</span><p class="hint">以下仅为任务关系示意，不代表馆内布局或展品位置。</p><nav class="route-map" aria-label="任务点位">${GAME_CONTENT.tasks.map(task => `<a class="task-point" href="#${task.id}"><span class="point-number glass-bead" data-point="${task.id}"><span>${task.id}</span></span><span class="point-body"><span class="point-title">${e(task.title)}</span><span class="point-caption"><span class="status" data-status="${taskStatus(task.id)}">${taskStatus(task.id)}</span></span></span><span class="arrow" aria-hidden="true">↗</span></a>`).join('')}</nav></section><a class="card notes-entry" href="#notes"><div><h3>调查笔记</h3><p>${e(notes.size ? '你的记录已保留，可继续更新。' : GAME_CONTENT.notesEmpty)}</p></div><span class="arrow" aria-hidden="true">↗</span></a><p class="hint">“已完成调查”只表示活动完成，不表示知识掌握。</p>`;
  } else if (route === 'ending') {
    app.innerHTML = `<span class="eyebrow">本次活动记录</span><h1>看作品，也看材料与制作过程。</h1><section class="card"><h2>我认识了两种加工方式</h2>${notes.has('L1') ? '<p>灯工：本例从料棒与局部火焰加热开始。</p>' : '<p class="hint">灯工活动尚未留下记录，可返回查看。</p>'}${notes.has('L2') ? '<p>炉工：本例从炉中挑料，并进行吹制及后续加工。</p>' : '<p class="hint">炉工活动尚未留下记录，可返回查看。</p>'}</section><section class="card"><h2>我认识了颜色的材料线索</h2>${notes.has('L3') ? notes.get('L3').cases.map(id => `<p>${e(caseById(id).name)}：${e(caseById(id).shortMaterial)}</p>`).join('') : '<p class="hint">尚未留下颜色线索。</p>'}<p class="hint">通用案例不等于现场展品配方。完成只表示活动完成。</p></section><a class="button primary next-task" href="#notes">查看三关调查笔记</a><a class="button secondary next-task" href="#L3">回看展品与材料</a>${back}`;
  } else if (route === 'notes') {
    app.innerHTML = `<span class="eyebrow">我的调查笔记</span><h1>留下记录，也留下疑问</h1>${notes.size ? GAME_CONTENT.tasks.filter(task => notes.has(task.id)).map(task => `${!session[task.id].written ? '<p class="hint">已加入可选线索，活动尚未完成。</p>' : ''}${noteCard(task.id)}`).join('') : `<section class="card empty-state"><h2>笔记还是空白的</h2><p>${e(GAME_CONTENT.notesEmpty)}</p></section>`}<p class="hint">当前会话内保存；刷新后清空。活动完成不表示掌握或鉴定成功。</p>${back}`;
  } else {
    app.innerHTML = `<section class="intro"><span class="eyebrow">一场关于材料与制作的调查</span><div class="art" aria-hidden="true"><span class="glass"></span><span class="glass two"></span><span class="glass three"></span><span class="glass four"></span></div><p class="decoration-label">原创抽象琉璃装饰 · 非展品照片</p><h1>${e(GAME_CONTENT.title)}</h1><p class="subtitle">${e(GAME_CONTENT.subtitle)}</p><p class="intro-copy">${e(GAME_CONTENT.opening)}</p><div class="identity">你的身份 · ${e(GAME_CONTENT.identity)}</div><a class="button primary" href="#map">开始调查 →</a><p class="hint">${e(GAME_CONTENT.disclaimer)}</p></section>`;
  }
  document.title = `${taskById(route)?.title || (route === 'map' ? '示意地图' : route === 'notes' ? '调查笔记' : GAME_CONTENT.title)} · ${GAME_CONTENT.subtitle}`;
  if (resetScroll) { window.scrollTo(0, 0); app.focus({ preventScroll: true }); }
}
window.addEventListener('hashchange', () => render());
reducedMotion.addEventListener('change', () => render(false));
render();
