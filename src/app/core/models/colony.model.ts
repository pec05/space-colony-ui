export interface ColonyState {
  id:               number;
  name:             string;
  status:           string;
  population:       number;
  lastTickAt:       string;
  lastProcessedAt:  string;
  resources:        ResourceState[];
  activeEvents:     EventSummary[];
}

export interface ResourceState {
  resourceType:     string;
  currentAmount:    number;
  productionRate:   number;
  consumptionRate:  number;
  storageCapacity:  number;
  inShortage:       boolean;
  criticallyLow:    boolean;
}

export interface EventSummary {
  id:             number;
  eventType:      string;
  severity:       string;
  description:    string;
  simOccurredAt:  string;
  simResolvedAt:  string | null;
  resolved:       boolean;
}

export interface BuildingResponse {
  id:               number | null;
  type:             string;
  affectedResource: string;
  productionBonus:  number;
  constructionCost: number;
  builtAt:          string | null;
}

export interface TradeResponse {
  id:                number;
  senderColonyId:    number;
  senderColonyName:  string;
  receiverColonyId:  number;
  receiverColonyName:string;
  resourceType:      string;
  amount:            number;
  status:            string;
  initiatedSimTime:  string;
  etaSimTime:        string;
  arrivedAt:         string | null;
}
