import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { TECHNOLOGY_NAMES } from "../constants/technologies";

export interface ITechnology {
  icon: IconDefinition;
  name: TECHNOLOGY_NAMES;
}