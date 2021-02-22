class Event {
  event: string;
  properties;

  constructor(event, properties) {
    this.event = event;
    this.properties = properties;
  }
}

class MixpanelTracker {
  private properties;
  private buffer: Event[];

  constructor(properties) {
    this.properties = properties;
    this.properties["platform"] = "web";
    this.buffer = [];
  }

  track = (event, properties = {}) => {
    Object.assign(properties, this.properties);
    this.buffer.push(new Event(event, properties));

    window["dataLayer"] = window["dataLayer"] || [];
    window["dataLayer"].push({
      event: `webEvent.${event}`,
      webProperties: properties,
    });

    const mxp = window["mixpanel"];
    if (!mxp) return;

    do {
      const e = this.buffer.shift();
      mxp.track(e.event, e.properties);
    } while (this.buffer.length !== 0);
  };

  trackLink = (linkText, properties = {}) => {
    const event = `${linkText} Link Clicked`;
    this.track(event, properties);
  };

  trackToggle = (toggleText, properties = {}) => {
    const event = `${toggleText} Toggle Clicked`;
    this.track(event, properties);
  };

  trackButton = (buttonText, properties = {}) => {
    const event = `${buttonText} Button Clicked`;
    this.track(event, properties);
  };

  trackScreen = (screen, properties = {}) => {
    const event = `${screen} Screen Viewed`;
    this.track(event, properties);
  };

  trackModal = (modal, properties = {}) => {
    const event = `${modal} Displayed`;
    this.track(event, properties);
  };

  trackTransactionConfirmed = (name, properties = {}) => {
    const event = `${name} Confirmed`;
    this.track(event, properties);
  };

  trackError = (name, message, properties = {}) => {
    const event = `${name} Error`;
    properties["message"] = message;

    this.track(event, properties);
  };
}

class AutoTracker extends MixpanelTracker {
  constructor() {
    super({ product: "auto" });
  }
}

class GeneralTracker extends MixpanelTracker {
  constructor() {
    super({ product: "general" });
  }
}

class SmartphoneTracker extends MixpanelTracker {
  constructor() {
    super({ product: "smartphone" });
  }
}

const autoTracker = new AutoTracker();
const generalTracker = new GeneralTracker();
const smartphoneTracker = new SmartphoneTracker();

export default MixpanelTracker;
export { generalTracker, autoTracker, smartphoneTracker };
