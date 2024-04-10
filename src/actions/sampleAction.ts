// TODO: Remove this sample action when you add your own actions to the plugin.

import { ActionDefinition, ActionContext, OutputObject } from 'connery';

const actionDefinition: ActionDefinition = {
  key: 'sampleAction',
  title: 'Sample action',
  description: 'A sample action that adds two numbers',
  type: 'read',
  inputParameters: [
    {
      key: 'number1',
      title: 'Number 1',
      description: 'The first number to add',
      type: 'string',
      validation: {
        required: true,
      },
    },
    {
      key: 'number2',
      title: 'Number 2',
      description: 'The second number to add',
      type: 'string',
      validation: {
        required: true,
      },
    },
  ],
  operation: {
    handler: handler,
  },
  outputParameters: [
    {
      key: 'sum',
      title: 'Sum',
      description: 'The sum of the two numbers',
      type: 'string',
      validation: {
        required: true,
      },
    },
  ],
};
export default actionDefinition;

export async function handler({ input, configuration }: ActionContext): Promise<OutputObject> {
  const sum = Number(input.number1) + Number(input.number2);

  return {
    sum: sum.toString(),
  };
}
