import type { SubstrateChain } from "../../types/v1";
import type { BigDecimals } from "../../util/math";

const chainDef: SubstrateChain = {
  name: "genshiro",
  title: "Genshiro",
  nativeToken: "gens",
  type: "substrate",
  logo: "https://contentv2.equilibrium.io/uploads/gens_1f06723045.svg",
  nodes: ["wss://node.ksm.genshiro.io"],
  withdraw: "eq-bridge",
};

const getBalance = (pub: `0x${string}`) =>
  ({
    section: "system",
    method: "account",
    args: [pub],
  } as const);

const getNativeBalance = getBalance;

const parseBalance = (data: any, context?: Record<string, any>) => {
  const { decimals, asset } = context ?? {};
  const balances = data?.data?.isV0 ? data.data.asV0.balance : undefined;

  const [, balance] =
    balances?.find(
      ([assetId]: [{ toString: (radix?: number) => `${number}` }]) =>
        assetId.toString(10) === asset?.toString(10),
    ) ?? [];

  return {
    value: BigInt(
      balance?.isPositive
        ? balance.asPositive?.toString?.(10)
        : `-${balance.asNegative?.toString?.(10)}` ?? 0,
    ),

    decimals,
  } as BigDecimals;
};

const parseNativeBalance = (data: any) => {
  const { decimals, asset } = { decimals: 9, asset: 1734700659 };
  const balances = data?.data?.isV0 ? data.data.asV0.balance : undefined;

  const [, balance] =
    balances?.find(
      ([assetId]: [{ toString: (radix?: number) => `${number}` }]) =>
        assetId.toString(10) === asset?.toString(10),
    ) ?? [];

  return {
    value: BigInt(
      balance?.isPositive
        ? balance.asPositive?.toString?.(10)
        : `-${balance.asNegative?.toString?.(10)}` ?? 0,
    ),

    decimals,
  } as BigDecimals;
};

const getTransferArgs = (
  amount: `${number}`,
  pub: `0x${string}`,
  context?: Record<string, any>,
) => {
  return {
    section: "eqBridge",
    method: "transferNative",
    args: [amount, pub, 7, context?.resourceId],
  } as const;
};

const fns = {
  // balances
  getBalance,
  parseBalance,
  // native balance
  getNativeBalance,
  parseNativeBalance,
  // transfer
  getTransferArgs,
} as const;

export const genshiro = {
  ...chainDef,
  ...fns,
};
