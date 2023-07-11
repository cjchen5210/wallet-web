export interface Asset {
    name: string;
    address: string | null;
    type: number;
    icon: string;
    sort: number;
    decimals: number;
}

class Assets {
    [key: string]: Asset;
}

export class Config {
    public static ADDRESS_SIMPLE_ACCOUNT_FACTORY: string;
    public static ADDRESS_TOKEN_PAYMASTER: string;
    public static ADDRESS_ENTRYPOINT: string;
    public static MAIN_TOKEN_TX_LIST_API: string;
    public static MAIN_TOKEN_TX_LIST_INTERNAL_API: string;
    public static ERC20_TX_FROM_LIST_API: string;
    public static ERC20_TX_TO_LIST_API: string;
    public static BUNDLER_API: string;
    public static RPC_API: string;
    public static TOKENS: Assets;

    public static async init(rawData: string) {
        await this.flushConfig(rawData);
    }

    public static async flushConfig(rawData: string) {
        const configData = JSON.parse(rawData);

        this.ADDRESS_SIMPLE_ACCOUNT_FACTORY = configData.address.address_simple_account_factory;
        this.ADDRESS_TOKEN_PAYMASTER = configData.address.address_token_paymaster;
        this.ADDRESS_ENTRYPOINT = configData.address.address_entrypoint;
        this.MAIN_TOKEN_TX_LIST_API = configData.api.matic_tx_list_api;
        this.MAIN_TOKEN_TX_LIST_INTERNAL_API = configData.api.matic_tx_list_internal_api;
        this.ERC20_TX_FROM_LIST_API = configData.api.erc20_tx_from_list_api;
        this.ERC20_TX_TO_LIST_API = configData.api.erc20_tx_to_list_api;
        this.BUNDLER_API = configData.api.bundler_api;
        this.RPC_API = configData.api.rpc_api;
        this.TOKENS = configData.token;
    }
}