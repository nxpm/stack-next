import { Tree } from '@nrwl/devkit'
import { WebFeatureGeneratorSchema } from './schema'
import { createWebFeature } from './create-web-feature'

export async function generateWebFeatureLayout(host: Tree, options: WebFeatureGeneratorSchema) {
  await createWebFeature(host, 'feature', options)
}
