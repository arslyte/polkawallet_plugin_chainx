// Copyright 2017-2021 @polkadot/app-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiPromise } from '@polkadot/api';

import { CHAINX_GENESIS } from '../../constants/networkSpect';

export interface Inflation {
  inflation: number;
  stakedReturn: number;
}

interface InflationParams {
  falloff: number;
  idealStake: number;
  maxInflation: number;
  minInflation: number;
}

const DEFAULT_PARAMS: InflationParams = {
  falloff: 0.05,
  idealStake: 0.5,
  maxInflation: 0.1,
  minInflation: 0.025
};

const KNOWN_PARAMS: Record<string, InflationParams> = {
  [CHAINX_GENESIS]: { ...DEFAULT_PARAMS, idealStake: 0.5 }
};

export function getInflationParams (api: ApiPromise): InflationParams {
  return KNOWN_PARAMS[api.genesisHash.toHex()] || DEFAULT_PARAMS;
}
