## Nature Dividend Platform Prototype

This repository now hosts a lightweight, no-build prototype of the **Nature Dividend** climate action platform. The prototype captures both core user journeys outlined in the provided workflows:

* **Individuals** can discover missions, accept tasks, submit proof packages, watch automated verification in action, and see recognition/retention mechanics update in real time.
* **Projects & NGOs** can spin up project workspaces, define measurable objectives, launch contributor missions, trigger Dynamic MRV refreshes, assemble reports, and schedule supporter re-engagement touchpoints.

### Getting started

1. Open `nature-dividend/index.html` directly in a modern browser, or serve the folder with a simple static server (e.g. `python -m http.server`).
2. Explore the **Individual Missions** tab to interact with the mission lifecycle from discovery through recognition.
3. Switch to the **Project & NGO Hub** tab to configure project objectives, draft missions, simulate MRV refreshes, and add retention campaigns.

### Project structure

```
nature-dividend/
├── index.html         # Application shell & layout
└── assets/
    ├── app.js        # Interactive mission & project workflows
    ├── styles.css    # Nature Dividend design system
    └── leaf-icon.svg # Simple brand mark used in the header
```

Because the prototype is framework-free, no additional dependencies or build steps are required.
