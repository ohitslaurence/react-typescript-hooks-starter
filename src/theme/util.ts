export const mapTheme = (variables: any) => {
  return {
    '--color-primary': variables.primary || '',
    '--color-primary-dark': variables.primaryDark || '',
    '--color-primary-light': variables.primaryLight || '',

    '--color-secondary': variables.secondary || '',
    '--color-secondary-light': variables.secondaryLight || '',
    '--color-secondary-dark': variables.secondaryDark || '',

    '--color-tertiary': variables.tertiary || '',
    '--color-tertiary-light': variables.tertiaryLight || '',
    '--color-tertiary-dark': variables.tertiaryDark || '',

    '--color-info': variables.info || '',
    '--color-info-light': variables.infoLight || '',
    '--color-info-dark': variables.infoDark || '',

    '--color-warning': variables.warning || '',
    '--color-warning-light': variables.warningLight || '',
    '--color-warning-dark': variables.warningDark || '',

    '--color-negative': variables.negative || '',
    '--color-negative-light': variables.negativeLight || '',
    '--color-negative-dark': variables.negativeDark || '',

    '--color-positive': variables.positive || '',
    '--color-positive-light': variables.positiveLight || '',
    '--color-positive-dark': variables.positiveDark || '',

    '--color-text-primary': variables.textPrimary || '',

    '--sidebar-width': variables.sidebarWidth || '',
    '--background-primary': variables.backgroundPrimary || '',
    '--background-sec': variables.backgroundSecondary || '',
  };
};
