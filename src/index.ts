import { PluginDefinition, startPluginServer } from 'connery';
import sampleAction from './actions/sampleAction.js';

const pluginDefinition: PluginDefinition = {
  title: 'test',
  description: 'test',
  actions: [sampleAction],
  configurationParameters: [],
  maintainers: [
    {
      name: 'msmirnyagin',
      email: 'msmirnyagin@gmail.com',
    },
  ],
};

startPluginServer(pluginDefinition);
