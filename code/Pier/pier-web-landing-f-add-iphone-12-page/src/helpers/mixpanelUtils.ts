class MixpanelUtils {
  static buildProfile = (pierId, name, email) => {
    return {
      "Pier User ID": pierId,
      $name: name,
      $email: email,
    };
  };

  static createUser = (pierId: string, name: string, email: string) => {
    const mxp = window["mixpanel"];

    mxp.alias(pierId);
    mxp.register({ email: email });

    mxp.identify(mxp.get_distinct_id());
    mxp.people.set_once(MixpanelUtils.buildProfile(pierId, name, email));
  };
}

export default MixpanelUtils;
