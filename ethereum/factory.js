import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), "0x4847fFe7155D6ec27705BdC2E9A870787619dA17");

export default instance;
