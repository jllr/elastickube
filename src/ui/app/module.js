import 'angular';

import coreModule from 'core/module';
import layoutModule from 'layout/module';
import widgetsModule from 'widgets/module';

import adminModule from 'admin/module';
import instancesModule from 'instances/module';
import loginModule from 'login/module';
import templatesModule from 'templates/module';

import baseRoutes from './config/base-routes';
import animateConfig from './config/animate-config';
import routerConfig from './config/router-config';
import themeConfig from './config/theme-config';
import authConfig from './config/auth-run';
import dataFlowInitialization from './config/data-flow-initialization-run';

angular
    .module('app', [

        /* Shared modules */
        coreModule,
        layoutModule,
        widgetsModule,

        /* Feature areas */
        adminModule,
        instancesModule,
        loginModule,
        templatesModule
    ])

    .config(baseRoutes)
    .config(animateConfig)
    .config(routerConfig)
    .config(themeConfig)

    .run(authConfig)
    .run(dataFlowInitialization);