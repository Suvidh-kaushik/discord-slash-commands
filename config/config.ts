import { env, environment } from "../src/typeDefinitions/default.types";
import {
  RDS_BASE_API_URL,
  RDS_BASE_STAGING_API_URL,
  RDS_BASE_DEVELOPMENT_API_URL,
  VERIFICATION_SITE_URL,
  STAGING_VERIFICATION_SITE_URL,
  DEVELOPMENT_VERIFICATION_SITE_URL,
  RDS_TRACKING_CHANNEL_URL,
  DEVELOPMENT_RDS_TRACKING_CHANNEL_URL,
  STAGING_RDS_TRACKING_CHANNEL_URL,
} from "../src/constants/urls";

const config = (env: env) => {
  const environment: environment = {
    production: {
      RDS_BASE_API_URL: RDS_BASE_API_URL,
      VERIFICATION_SITE_URL: VERIFICATION_SITE_URL,
      TRACKING_CHANNEL_URL: RDS_TRACKING_CHANNEL_URL,
    },
    staging: {
      RDS_BASE_API_URL: RDS_BASE_STAGING_API_URL,
      VERIFICATION_SITE_URL: STAGING_VERIFICATION_SITE_URL,
      TRACKING_CHANNEL_URL: STAGING_RDS_TRACKING_CHANNEL_URL,
    },
    default: {
      RDS_BASE_API_URL: RDS_BASE_DEVELOPMENT_API_URL,
      VERIFICATION_SITE_URL: DEVELOPMENT_VERIFICATION_SITE_URL,
      TRACKING_CHANNEL_URL: DEVELOPMENT_RDS_TRACKING_CHANNEL_URL,
    },
  };

  return environment[env.CURRENT_ENVIRONMENT] || environment.default;
};

export default config;
