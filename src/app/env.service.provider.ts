import { EnvService } from "./env.service";

interface EnvConfig {
  apiUrl: string 
  envName: string
}

interface Window {
  [index: string]: any;
}

export const EnvServiceFactory = () => {
  // Create env
  const env = new EnvService();

  // Read environment variables from browser window
  const browserWindow: Window = window || {};
  // type to expected config 
  if (browserWindow.hasOwnProperty('__env')){
    const envWindow: EnvConfig = browserWindow['__env'] as EnvConfig
    // assign to service
    env.apiUrl = envWindow.apiUrl
    env.envName = envWindow.envName
  }
  return env;
};

export const EnvServiceProvider = {
  provide: EnvService,
  useFactory: EnvServiceFactory,
  deps: [] as string[],
};
