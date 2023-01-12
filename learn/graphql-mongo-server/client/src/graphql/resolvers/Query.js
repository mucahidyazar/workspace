import { Cat } from "../../models/Cat";

export default {
  cats: () => Cat.find()
}