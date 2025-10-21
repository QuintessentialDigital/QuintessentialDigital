const state = {
  filters: {
    search: '',
    type: 'all',
  },
  missions: [
    {
      id: 'lagos-shoreline-cleanup',
      title: 'Lagos Lagoon Shoreline Cleanup',
      type: 'cleanup',
      location: 'Lagos Island, Nigeria',
      schedule: 'Saturday · 8:00 AM - 11:00 AM',
      summary:
        'Partner with EcoCircle to clear 1.5 tons of plastic from the Marina shoreline while documenting pollution hotspots.',
      tags: ['GPS check-in', 'Plastic audit', 'Community-led'],
      impact: {
        target: '1.5 tons of waste removed',
        proof: ['Location-locked check-in', 'Photo of sorted waste', 'Trash type tally'],
        recognition: 'Earn 120 vitality points + Lagoon Guardian badge',
      },
      tasks: [
        'Check-in at the Marina jetty using the PWA QR code.',
        'Collect and sort debris by plastic type. Log the counts in the app.',
        'Upload before/after photos and note any oil slicks or chemical waste.',
      ],
      communityFeed: [
        {
          actor: 'EcoCircle Lagos',
          message: '“Volunteers logged 12 new pollution hotspots last weekend — thank you!”',
          timestamp: '2h ago',
        },
        {
          actor: 'Mayor’s Office',
          message: '“Verified data from this mission feeds the city’s plastic recovery targets.”',
          timestamp: '1d ago',
        },
      ],
    },
    {
      id: 'yaba-street-trees',
      title: 'Yaba Street Tree Monitoring',
      type: 'tree',
      location: 'Yaba Technology District',
      schedule: 'Flexible · Anytime this week',
      summary:
        'Help measure soil moisture and canopy health for 50 newly planted street trees with IoT-enabled sensors.',
      tags: ['Moisture probe', 'Citizen science', 'Tree health'],
      impact: {
        target: '50 trees assessed with photo proof',
        proof: ['Scan NFC tag on tree guard', 'Upload canopy photo', 'Record soil moisture reading'],
        recognition: 'Earn 95 vitality points + BioGuardian streak credit',
      },
      tasks: [
        'Locate your assigned cluster of 5 trees using the in-app map.',
        'Scan the NFC tag to sync with the tree’s health record.',
        'Capture canopy photo & enter soil moisture reading from the probe kit.',
      ],
      communityFeed: [
        {
          actor: 'Greener Lagos',
          message: '“Moisture readings triggered smart irrigation last night — your data matters!”',
          timestamp: '4h ago',
        },
      ],
    },
    {
      id: 'ajah-biodiversity-census',
      title: 'Ajah Wetland Biodiversity Census',
      type: 'biodiversity',
      location: 'Lekki-Ajah Wetlands',
      schedule: 'Sunday · 6:30 AM biodiversity walk',
      summary:
        'Join the Lagos Bird Club to document migratory species and note invasive plants threatening the wetland buffer.',
      tags: ['Species logging', 'Invasive watch', 'Wetland health'],
      impact: {
        target: 'Log 25+ species sightings',
        proof: ['Audio clip or photo of species', 'GPS trail of transect walk', 'Notes on invasive plants'],
        recognition: 'Earn 140 vitality points + Wetland Watcher badge',
      },
      tasks: [
        'Download the species checklist for your transect and review priority sightings.',
        'Record sightings in the PWA with timestamps — audio uploads encouraged.',
        'Flag invasive plants with quick photo notes for the restoration crew.',
      ],
      communityFeed: [
        {
          actor: 'Lekki Conservation Centre',
          message: '“Verified species logs unlock additional funding for habitat expansion.”',
          timestamp: '3d ago',
        },
      ],
    },
  ],
  selectedMissionId: null,
  acceptedMissions: [],
  recognition: {
    streakDays: 6,
    totalPoints: 420,
    badges: [
      {
        id: 'lagoon-guardian',
        title: 'Lagoon Guardian',
        description: 'Completed 3 shoreline missions with verified plastic audits.',
        icon: '🌊',
      },
      {
        id: 'data-trailblazer',
        title: 'Data Trailblazer',
        description: 'Submitted 10 geo-tagged observations that passed MRV checks.',
        icon: '🛰️',
      },
    ],
    activityFeed: [
      {
        type: 'streak',
        message: 'You raised vitality streak to 6 days — keep the rhythm going! 💪',
        timestamp: 'Today',
      },
    ],
  },
  projects: [
    {
      id: 'mangrove-guardians',
      name: 'Mangrove Guardians Initiative',
      location: 'Badagry Creek · Lagos',
      theme: 'Reforestation',
      summary:
        'Restoring degraded mangrove buffers while training lagoon communities on blue carbon livelihoods.',
      metrics: [
        { label: 'Hectares restored', value: 24 },
        { label: 'Blue carbon (tCO₂e)', value: 310 },
        { label: 'Active contributors', value: 486 },
      ],
      objectives: [
        {
          indicator: 'Mangrove canopy cover',
          baseline: '45% (2023 LiDAR scan)',
          target: '60% canopy cover by Q4 2025',
        },
        {
          indicator: 'Community cooperatives',
          baseline: '2 active fisher groups',
          target: '5 trained co-ops running blue carbon nurseries',
        },
      ],
      missions: [
        {
          name: 'Creek Clean Sweep',
          indicator: 'Remove ghost nets & plastic islands',
          proof: ['Drone snapshot', 'Weight tickets'],
          contributors: 168,
        },
        {
          name: 'Mangrove Health Transects',
          indicator: 'Quarterly biomass sampling',
          proof: ['Sapling diameter logs', 'Soil carbon cores'],
          contributors: 92,
        },
      ],
      verification: {
        satellite: 'Sentinel-2 canopy index synced weekly',
        sensors: 'LoRaWAN tide & salinity sensors auto-stream data',
        auditors: 'Blue Earth Labs review flagged anomalies monthly',
        lastAudit: 'MRV status: Verified · 4 days ago',
      },
      supporters: [
        {
          name: 'EcoBank',
          message: 'Impact investors ready for PVS snapshot Q2',
        },
        {
          name: 'Global Mangrove Alliance',
          message: 'Feature your project in international biodiversity week',
        },
      ],
      reengage: [
        {
          title: 'Impact streak challenge',
          copy: 'Launch 7-day micro-missions for lagoon youth ambassadors.',
          channel: 'WhatsApp broadcast',
        },
        {
          title: 'Partner spotlight',
          copy: 'Share verified blue-carbon stats with EcoBank sustainability desk.',
          channel: 'Email digest',
        },
      ],
      activeSection: 'objectives',
    },
  ],
};

const elements = {
  navButtons: document.querySelectorAll('.nav-btn'),
  views: document.querySelectorAll('.view'),
  missionList: document.getElementById('mission-list'),
  missionTemplate: document.getElementById('mission-template'),
  missionDetail: document.getElementById('mission-detail'),
  recognition: document.getElementById('recognition'),
  searchInput: document.getElementById('mission-search'),
  filterSelect: document.getElementById('mission-filter'),
  badgeTemplate: document.getElementById('badge-template'),
  projectLayout: document.getElementById('project-workflows'),
  projectTemplate: document.getElementById('project-template'),
  newProjectButton: document.getElementById('new-project'),
  projectDialog: document.getElementById('project-dialog'),
  projectForm: document.getElementById('project-form'),
};

function switchView(targetId) {
  elements.views.forEach((view) => {
    view.classList.toggle('is-active', view.id === targetId);
  });
  elements.navButtons.forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.target === targetId);
  });
}

elements.navButtons.forEach((button) => {
  button.addEventListener('click', () => switchView(button.dataset.target));
});

function createMissionCard(mission) {
  const fragment = elements.missionTemplate.content.cloneNode(true);
  fragment.querySelector('.mission-title').textContent = mission.title;
  fragment.querySelector('.mission-meta').textContent = `${mission.location} · ${mission.schedule}`;
  fragment.querySelector('.mission-summary').textContent = mission.summary;
  const tagsList = fragment.querySelector('.mission-tags');
  mission.tags.forEach((tag) => {
    const li = document.createElement('li');
    li.textContent = tag;
    tagsList.appendChild(li);
  });
  const card = fragment.querySelector('.mission-card');
  card.dataset.id = mission.id;
  fragment.querySelector('button').addEventListener('click', () => {
    state.selectedMissionId = mission.id;
    renderMissionDetail();
  });
  return fragment;
}

function renderMissionList() {
  elements.missionList.innerHTML = '';
  const query = state.filters.search.trim().toLowerCase();
  const filtered = state.missions.filter((mission) => {
    const matchesType = state.filters.type === 'all' || mission.type === state.filters.type;
    const matchesQuery =
      !query ||
      mission.title.toLowerCase().includes(query) ||
      mission.summary.toLowerCase().includes(query) ||
      mission.tags.some((tag) => tag.toLowerCase().includes(query)) ||
      mission.location.toLowerCase().includes(query);
    return matchesType && matchesQuery;
  });

  if (!filtered.length) {
    const empty = document.createElement('p');
    empty.textContent = 'No missions match your filters yet — try another search term.';
    empty.className = 'panel-subtitle';
    elements.missionList.appendChild(empty);
    return;
  }

  filtered.forEach((mission) => {
    elements.missionList.appendChild(createMissionCard(mission));
  });
}

elements.searchInput.addEventListener('input', (event) => {
  state.filters.search = event.target.value;
  renderMissionList();
});

elements.filterSelect.addEventListener('change', (event) => {
  state.filters.type = event.target.value;
  renderMissionList();
});

function getMissionById(id) {
  return state.missions.find((mission) => mission.id === id) ?? null;
}

function getAcceptedMission(id) {
  return state.acceptedMissions.find((mission) => mission.missionId === id) ?? null;
}

function addActivity(message, type = 'update') {
  state.recognition.activityFeed.unshift({ message, type, timestamp: 'Just now' });
  if (state.recognition.activityFeed.length > 6) {
    state.recognition.activityFeed.pop();
  }
}

function acceptMission(id) {
  if (getAcceptedMission(id)) return;
  state.acceptedMissions.push({ missionId: id, status: 'accepted', proofSubmitted: false, verified: false });
  state.recognition.streakDays += 1;
  state.recognition.totalPoints += 25;
  addActivity('Mission accepted — streak extended and kickoff checklist unlocked. ✅');
  renderMissionDetail();
  renderRecognition();
}

function submitProof(id) {
  const accepted = getAcceptedMission(id);
  if (!accepted || accepted.proofSubmitted) return;
  accepted.proofSubmitted = true;
  accepted.status = 'proof-submitted';
  addActivity('Proof package submitted. Auto verification running...');
  renderMissionDetail();
  renderRecognition();
  window.setTimeout(() => {
    verifyMission(id);
  }, 1200);
}

function verifyMission(id) {
  const accepted = getAcceptedMission(id);
  if (!accepted || accepted.verified) return;
  accepted.verified = true;
  accepted.status = 'verified';
  state.recognition.totalPoints += 120;
  addActivity('Mission verified! Impact points and badge progress updated. 🌟');
  maybeUnlockBadge(id);
  renderMissionDetail();
  renderRecognition();
}

function maybeUnlockBadge(missionId) {
  const mission = getMissionById(missionId);
  if (!mission) return;
  if (missionId === 'lagos-shoreline-cleanup' && !state.recognition.badges.some((badge) => badge.id === 'lagoon-task-force')) {
    state.recognition.badges.push({
      id: 'lagoon-task-force',
      title: 'Lagoon Task Force',
      description: 'Completed a verified Lagoon cleanup mission with metadata + proof package.',
      icon: '♻️',
    });
  }
}

function renderMissionDetail() {
  const missionId = state.selectedMissionId;
  const mission = missionId ? getMissionById(missionId) : null;
  elements.missionDetail.classList.toggle('empty-state', !mission);

  if (!mission) {
    elements.missionDetail.innerHTML = '<p>Select a mission to view full details.</p>';
    return;
  }

  const accepted = getAcceptedMission(mission.id);
  const proofList = mission.impact.proof.map((item) => `<li>${item}</li>`).join('');
  const taskList = mission.tasks.map((task) => `<li>${task}</li>`).join('');
  const steps = [
    {
      title: 'Accept the mission',
      description: 'Claim your slot, review required proof, and sync to your calendar.',
      complete: Boolean(accepted),
    },
    {
      title: 'Perform mission actions',
      description: 'Follow the mission checklist and capture the required documentation.',
      complete: accepted?.proofSubmitted ?? false,
    },
    {
      title: 'Auto verification',
      description: 'The platform checks metadata, GPS, and compares with project data.',
      complete: accepted?.verified ?? false,
    },
    {
      title: 'Recognition & shout-outs',
      description: mission.impact.recognition,
      complete: accepted?.verified ?? false,
    },
  ];

  const buttonMarkup = (() => {
    if (!accepted) {
      return `<button class="primary" data-action="accept">Accept this mission</button>`;
    }
    if (!accepted.proofSubmitted) {
      return `<button class="primary" data-action="proof">Submit proof package</button>`;
    }
    if (!accepted.verified) {
      return `<p class="panel-subtitle">Verification in progress — you will be notified once it completes.</p>`;
    }
    return `<p class="panel-subtitle">Mission verified! Share your success on social to inspire friends.</p>`;
  })();

  elements.missionDetail.innerHTML = `
    <div class="detail-header">
      <h4>${mission.title}</h4>
      <p>${mission.location} · ${mission.schedule}</p>
    </div>
    <div class="detail-grid">
      <article class="detail-card">
        <h5>Impact target</h5>
        <p>${mission.impact.target}</p>
      </article>
      <article class="detail-card">
        <h5>Proof needed</h5>
        <ul>${proofList}</ul>
      </article>
      <article class="detail-card">
        <h5>Mission checklist</h5>
        <ul>${taskList}</ul>
      </article>
    </div>
    <div class="progress-tracker">
      ${steps
        .map(
          (step) => `
            <div class="progress-step ${step.complete ? 'completed' : ''}">
              <span class="badge-icon">${step.complete ? '✅' : '⏳'}</span>
              <div>
                <h6>${step.title}</h6>
                <p>${step.description}</p>
              </div>
            </div>
          `,
        )
        .join('')}
    </div>
    ${buttonMarkup}
    <section class="detail-card">
      <h5>Community feedback loop</h5>
      <ul>
        ${mission.communityFeed.map((entry) => `<li><strong>${entry.actor}:</strong> ${entry.message} <em>(${entry.timestamp})</em></li>`).join('')}
      </ul>
    </section>
  `;

  const actionButton = elements.missionDetail.querySelector('button[data-action]');
  if (actionButton) {
    actionButton.addEventListener('click', () => {
      if (actionButton.dataset.action === 'accept') {
        acceptMission(mission.id);
      } else if (actionButton.dataset.action === 'proof') {
        submitProof(mission.id);
      }
    });
  }
}

function renderRecognition() {
  const { streakDays, totalPoints, badges, activityFeed } = state.recognition;
  const accepted = state.acceptedMissions.map((entry) => {
    const mission = getMissionById(entry.missionId);
    if (!mission) return null;
    const status = entry.verified ? 'Verified' : entry.proofSubmitted ? 'Proof submitted' : 'Accepted';
    return `<li><strong>${mission.title}</strong> — ${status}</li>`;
  });

  elements.recognition.innerHTML = `
    <section class="detail-card">
      <h5>Your vitality stats</h5>
      <p>Impact streak: <strong>${streakDays} days</strong></p>
      <p>Total vitality points: <strong>${totalPoints}</strong></p>
      <ul>
        ${
          accepted.filter(Boolean).length
            ? accepted.filter(Boolean).join('')
            : '<li>No active missions yet — accept one to kickstart your streak.</li>'
        }
      </ul>
    </section>
    <section class="detail-card">
      <h5>Real-time feedback loop</h5>
      <ul>
        ${activityFeed
          .map((item) => `<li><strong>${item.timestamp}:</strong> ${item.message}</li>`)
          .join('')}
      </ul>
    </section>
    <section>
      <h5>Impact badges</h5>
      <div class="badge-grid"></div>
    </section>
  `;

  const badgeGrid = elements.recognition.querySelector('.badge-grid');
  badges.forEach((badge) => {
    const fragment = elements.badgeTemplate.content.cloneNode(true);
    fragment.querySelector('.badge-icon').textContent = badge.icon;
    fragment.querySelector('.badge-title').textContent = badge.title;
    fragment.querySelector('.badge-desc').textContent = badge.description;
    badgeGrid.appendChild(fragment);
  });
}

function renderProjectMetrics(container, metrics) {
  container.innerHTML = '';
  metrics.forEach((metric) => {
    const pill = document.createElement('span');
    pill.className = 'metric-pill';
    pill.innerHTML = `<span>${metric.value}</span> ${metric.label}`;
    container.appendChild(pill);
  });
}

function renderProjectDetail(project, container) {
  let innerHtml = '';
  switch (project.activeSection) {
    case 'objectives':
      innerHtml = `
        <section class="project-section">
          <h4>Define objectives & indicators</h4>
          <p>Link measurable goals to the Dynamic MRV baseline.</p>
          <ul>
            ${
              project.objectives.length
                ? project.objectives
                    .map(
                      (item) => `
                  <li>
                    <strong>${item.indicator}</strong><br />
                    Baseline: ${item.baseline}<br />
                    Target: ${item.target}
                  </li>
                `,
                    )
                    .join('')
                : '<li>No objectives yet. Add one below to connect your impact goals.</li>'
            }
          </ul>
          <form class="objective-form">
            <h5>Add a new objective</h5>
            <label>
              Indicator name
              <input name="indicator" required placeholder="e.g. Coastal erosion rate" />
            </label>
            <label>
              Baseline
              <input name="baseline" required placeholder="e.g. 1.8m shoreline loss 2024" />
            </label>
            <label>
              Target
              <input name="target" required placeholder="e.g. Reduce erosion to 0.8m by Q4" />
            </label>
            <button class="primary">Save objective</button>
          </form>
        </section>
      `;
      break;
    case 'missions':
      innerHtml = `
        <section class="project-section">
          <h4>Launch missions to contributors</h4>
          <p>Every mission template links to an MRV indicator so contributions stay verifiable.</p>
          <ul>
            ${
              project.missions.length
                ? project.missions
                    .map(
                      (mission) => `
                  <li>
                    <strong>${mission.name}</strong> — ${mission.indicator}<br />
                    Proof: ${mission.proof.join(', ')}<br />
                    Contributors: ${mission.contributors}
                  </li>
                `,
                    )
                    .join('')
                : '<li>No contributor missions have been launched yet. Draft one below.</li>'
            }
          </ul>
          <form class="mission-form">
            <h5>Add a mission</h5>
            <label>
              Mission name
              <input name="name" required placeholder="e.g. Drone canopy capture" />
            </label>
            <label>
              Linked indicator
              <input name="indicator" required placeholder="e.g. Canopy density index" />
            </label>
            <label>
              Proof requirements (comma separated)
              <input name="proof" required placeholder="e.g. Drone photo, GPS flight log" />
            </label>
            <button class="primary">Publish mission</button>
          </form>
        </section>
      `;
      break;
    case 'verification':
      innerHtml = `
        <section class="project-section">
          <h4>Proof & automated MRV</h4>
          <ul>
            <li><strong>Satellite sync:</strong> ${project.verification.satellite}</li>
            <li><strong>IoT sensors:</strong> ${project.verification.sensors}</li>
            <li><strong>Auditor notes:</strong> ${project.verification.auditors}</li>
            <li><strong>Status:</strong> ${project.verification.lastAudit}</li>
          </ul>
          <button class="secondary" data-trigger="mrv-refresh">Trigger manual refresh</button>
          <p class="panel-subtitle">Mission proofs uploaded by citizens land here for validation checks.</p>
        </section>
      `;
      break;
    case 'reports':
      innerHtml = `
        <section class="project-section">
          <h4>Generate impact reports</h4>
          <p>Compile investor-ready ESG & SDG dashboards straight from verified mission data.</p>
          <ul>
            <li>Latest PVS score: <strong>82 / 100</strong></li>
            <li>Carbon removal (tCO₂e): <strong>${project.metrics.find((m) => m.label === 'Blue carbon (tCO₂e)')?.value ?? 0}</strong></li>
            <li>Community livelihood index: <strong>+18% YoY</strong></li>
          </ul>
          <button class="primary" data-trigger="download-report">Download investor brief</button>
        </section>
      `;
      break;
    case 'reengage':
      innerHtml = `
        <section class="project-section">
          <h4>Re-engage community supporters</h4>
          <div class="reengage-list">
            ${
              project.reengage.length
                ? project.reengage
                    .map(
                      (item) => `
                  <article class="reengage-card">
                    <h5>${item.title}</h5>
                    <p>${item.copy}</p>
                    <p><strong>Channel:</strong> ${item.channel}</p>
                  </article>
                `,
                    )
                    .join('')
                : '<p class="panel-subtitle">No retention touchpoints yet. Plan one below to keep supporters active.</p>'
            }
          </div>
          <form class="reengage-form">
            <h5>Schedule a new touchpoint</h5>
            <label>
              Campaign title
              <input name="title" required placeholder="e.g. Volunteer reunion livestream" />
            </label>
            <label>
              Message copy
              <input name="copy" required placeholder="What do you want supporters to do next?" />
            </label>
            <label>
              Channel
              <input name="channel" required placeholder="e.g. SMS nudge" />
            </label>
            <button class="primary">Add touchpoint</button>
          </form>
        </section>
      `;
      break;
    default:
      innerHtml = '';
  }
  container.innerHTML = innerHtml;
}

function attachProjectDetailHandlers(project, container) {
  const objectiveForm = container.querySelector('.objective-form');
  if (objectiveForm) {
    objectiveForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(objectiveForm);
      project.objectives.push({
        indicator: data.get('indicator'),
        baseline: data.get('baseline'),
        target: data.get('target'),
      });
      addActivity(`New project objective saved for ${project.name}.`);
      renderProjectWorkflows();
    });
  }

  const missionForm = container.querySelector('.mission-form');
  if (missionForm) {
    missionForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(missionForm);
      project.missions.push({
        name: data.get('name'),
        indicator: data.get('indicator'),
        proof: data.get('proof').split(',').map((item) => item.trim()).filter(Boolean),
        contributors: 0,
      });
      addActivity(`Mission "${data.get('name')}" drafted for ${project.name}.`);
      renderProjectWorkflows();
    });
  }

  const mrvButton = container.querySelector('[data-trigger="mrv-refresh"]');
  if (mrvButton) {
    mrvButton.addEventListener('click', () => {
      mrvButton.textContent = 'Refreshing…';
      window.setTimeout(() => {
        project.verification.lastAudit = 'MRV status: Verified · moments ago';
        addActivity(`MRV refresh completed for ${project.name}.`);
        renderProjectWorkflows();
      }, 1000);
    });
  }

  const reportButton = container.querySelector('[data-trigger="download-report"]');
  if (reportButton) {
    reportButton.addEventListener('click', () => {
      addActivity(`Impact report queued for ${project.name}. Investors notified.`);
      reportButton.textContent = 'Report queued!';
      reportButton.disabled = true;
    });
  }

  const reengageForm = container.querySelector('.reengage-form');
  if (reengageForm) {
    reengageForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(reengageForm);
      project.reengage.push({
        title: data.get('title'),
        copy: data.get('copy'),
        channel: data.get('channel'),
      });
      addActivity(`Re-engagement touchpoint scheduled: ${data.get('title')}.`);
      renderProjectWorkflows();
    });
  }
}

function renderProjectWorkflows() {
  elements.projectLayout.innerHTML = '';
  state.projects.forEach((project, index) => {
    const fragment = elements.projectTemplate.content.cloneNode(true);
    const card = fragment.querySelector('.project-card');
    card.dataset.index = String(index);
    fragment.querySelector('.project-name').textContent = project.name;
    fragment.querySelector('.project-location').textContent = `${project.location} · ${project.theme}`;
    fragment.querySelector('.project-summary').textContent = project.summary;
    const metricsContainer = fragment.querySelector('.project-metrics');
    renderProjectMetrics(metricsContainer, project.metrics);
    const detailContainer = fragment.querySelector('.project-detail');
    renderProjectDetail(project, detailContainer);
    attachProjectDetailHandlers(project, detailContainer);
    fragment.querySelectorAll('.project-actions button').forEach((button) => {
      button.addEventListener('click', () => {
        project.activeSection = button.dataset.action;
        renderProjectWorkflows();
      });
      button.classList.toggle('is-active', button.dataset.action === project.activeSection);
    });
    elements.projectLayout.appendChild(fragment);
  });
}

function handleProjectDialog() {
  if (typeof elements.projectDialog.showModal === 'function') {
    elements.projectDialog.showModal();
  } else {
    elements.projectDialog.setAttribute('open', 'true');
  }
}

function resetProjectDialog() {
  elements.projectForm.reset();
  if (typeof elements.projectDialog.close === 'function') {
    elements.projectDialog.close();
  } else {
    elements.projectDialog.removeAttribute('open');
  }
}

elements.newProjectButton.addEventListener('click', handleProjectDialog);

elements.projectForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(elements.projectForm);
  const project = {
    id: `${Date.now()}`,
    name: formData.get('name'),
    location: formData.get('location'),
    theme: formData.get('theme'),
    summary: formData.get('summary'),
    metrics: [
      { label: 'Supporters onboarded', value: 0 },
      { label: 'Impact missions live', value: 0 },
      { label: 'Funding unlocked (₦)', value: '0' },
    ],
    objectives: [],
    missions: [],
    verification: {
      satellite: 'Satellite sync pending setup',
      sensors: 'Sensors not yet linked',
      auditors: 'Assign preferred auditor',
      lastAudit: 'MRV status: Draft',
    },
    supporters: [],
    reengage: [],
    activeSection: 'objectives',
  };
  state.projects.unshift(project);
  addActivity(`New project workspace created: ${project.name}.`);
  renderProjectWorkflows();
  resetProjectDialog();
});

elements.projectForm.addEventListener('reset', resetProjectDialog);

function init() {
  renderMissionList();
  renderMissionDetail();
  renderRecognition();
  renderProjectWorkflows();
}

init();
