import { bn, fp } from '../../../../common/numbers'
import { networkConfig } from '../../../../common/configuration'

// Base Addresses
export const AERO_USDC_eUSD_GAUGE = '0x793F22aB88dC91793E5Ce6ADbd7E733B0BD4733e'
export const AERO_USDC_eUSD_POOL = '0x7A034374C89C463DD65D8C9BCfe63BcBCED41f4F'
export const AERO_USDC_eUSD_HOLDER = '0xB6C8ea53ABA64a4BdE857D3b25d9DEbD0B149a0a'

export const AERODROME_ROUTER = '0xcF77a3Ba9A5CA399B7c97c74d54e5b1Beb874E43'

// Tokens
export const USDC = networkConfig['8453'].tokens.USDC!
export const eUSD = networkConfig['8453'].tokens.eUSD!
export const AERO = networkConfig['8453'].tokens.AERO!

// USDC
export const USDC_USD_FEED = networkConfig['8453'].chainlinkFeeds.USDC!
export const USDC_ORACLE_TIMEOUT = bn('86400')
export const USDC_ORACLE_ERROR = fp('0.003')
export const USDC_HOLDER = '0x3304E22DDaa22bCdC5fCa2269b418046aE7b566A'

// eUSD
export const eUSD_USD_FEED = networkConfig['8453'].chainlinkFeeds.eUSD!
export const eUSD_ORACLE_TIMEOUT = bn('86400')
export const eUSD_ORACLE_ERROR = fp('0.005')
export const eUSD_HOLDER = '0xb5E331615FdbA7DF49e05CdEACEb14Acdd5091c3'

export const FORK_BLOCK = 19074000

// Common
export const FIX_ONE = 1n * 10n ** 18n
export const PRICE_TIMEOUT = bn('604800') // 1 week
export const DEFAULT_THRESHOLD = fp('0.02') // 2%
export const DELAY_UNTIL_DEFAULT = bn('259200') // 72h
export const MAX_TRADE_VOL = fp('1e6')

export enum AerodromePoolType {
  Stable,
  Volatile,
}
