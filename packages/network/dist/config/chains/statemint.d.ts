import type { BigDecimals } from "../../util/math";
export declare const statemint: {
    name: string;
    title: string;
    nativeToken: string;
    type: string;
    getBalance: (pub: `0x${string}`, context?: Record<string, any>) => {
        readonly section: "assets";
        readonly method: "account";
        readonly args: readonly [any, `0x${string}`];
    };
    parseBalance: (data: any, context?: Record<string, any>) => BigDecimals;
    getNativeBalance: (pub: `0x${string}`) => {
        readonly section: "system";
        readonly method: "account";
        readonly args: readonly [`0x${string}`];
    };
    parseNativeBalance: (data: any, options?: Record<string, any>) => {
        value: bigint;
        decimals: number;
    };
    getTransferArgs: (amount: `${number}`, pub: `0x${string}`, context?: Record<string, any>) => {
        readonly section: "polkadotXcm";
        readonly method: "limitedReserveTransferAssets";
        readonly args: readonly [{
            readonly V1: {
                readonly parents: "1";
                readonly interior: {
                    readonly X1: {
                        readonly Parachain: "2011";
                    };
                };
            };
        }, {
            readonly V1: {
                readonly parents: 0;
                readonly interior: {
                    readonly X1: {
                        readonly AccountId32: {
                            readonly id: `0x${string}`;
                            readonly network: "Any";
                        };
                    };
                };
            };
        }, {
            readonly V1: readonly [{
                readonly id: {
                    readonly Concrete: {
                        readonly parents: 0;
                        readonly interior: {
                            readonly X2: readonly [{
                                readonly PalletInstance: 50;
                            }, {
                                readonly GeneralIndex: 1984;
                            }];
                        };
                    };
                };
                readonly fun: {
                    readonly Fungible: `${number}`;
                };
            }];
        }, 0, {
            readonly Limited: "800000000";
        }];
    };
    nodes: string[];
    paraId: number;
    logo: null;
};
