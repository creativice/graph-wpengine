import { createIntegrationEntity } from '@jupiterone/integration-sdk-core';
import { Entities } from '../constants';
import { WpEngineInstall } from '../../types';

export function getInstallKey(id: string): string {
  return `wp_engine_install:${id}`;
}

export function createInstallEntity(data: WpEngineInstall) {
  return createIntegrationEntity({
    entityData: {
      source: data,
      assign: {
        _class: Entities.INSTALL._class,
        _type: Entities.INSTALL._type,
        _key: getInstallKey(data.id),
        name: data.name,
        alternateURLs: [data.cname, data.primary_domain],
      },
    },
  });
}
