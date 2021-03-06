/*
 * Polkascan PRE Explorer GUI
 *
 * Copyright 2018-2019 openAware BV (NL).
 * This file is part of Polkascan.
 *
 * Polkascan is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Polkascan is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Polkascan. If not, see <http://www.gnu.org/licenses/>.
 *
 * runtime-module-detail.component.ts
 *
 */

import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Runtime} from '../../classes/runtime.class';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {RuntimeService} from '../../services/runtime.service';
import {RuntimeModuleService} from '../../services/runtime-module.service';
import {Location} from '@angular/common';
import {switchMap} from 'rxjs/operators';
import {RuntimeModule} from '../../classes/runtime-module.class';
import {RuntimeCallService} from '../../services/runtime-call.service';
import {RuntimeEventService} from '../../services/runtime-event.service';
import {RuntimeStorageService} from '../../services/runtime-storage.service';
import {RuntimeConstantService} from '../../services/runtime-constant.service';

@Component({
  selector: 'app-runtime-module-detail',
  templateUrl: './runtime-module-detail.component.html',
  styleUrls: ['./runtime-module-detail.component.scss']
})
export class RuntimeModuleDetailComponent implements OnInit {

  runtimeModule$: Observable<RuntimeModule>;

  constructor(
    private route: ActivatedRoute,
    private runtimeModuleService: RuntimeModuleService,
    private runtimeCallService: RuntimeCallService,
    private runtimeStorageService: RuntimeStorageService,
    private runtimeConstantService: RuntimeConstantService,
    private runtimeEventService: RuntimeEventService
  ) {
  }

  ngOnInit() {
    this.runtimeModule$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        if (params.get('id')) {
          return this.runtimeModuleService.get(params.get('id'), {include: ['calls', 'events', 'storage', 'constants']});
        }
      })
    );
  }
}
