enum States {
  brand = "brand",
  serie = "serie",
  model = "model",
  memory = "memory",
  final = "final",
}

enum SelectedKeys {
  brand = "brand",
  serie = "serie",
  model = "model",
  memory = "memory",
}

enum ItemsToFetch {
  series = "series",
  models = "models",
  memories = "memories",
}

enum Actions {
  SELECT_BRAND = "SELECT_BRAND",
  SELECT_SERIE = "SELECT_SERIE",
  SELECT_MODEL = "SELECT_MODEL",
  SELECT_MEMORY = "SELECT_MEMORY",
  BACK = "BACK",
  NEXT_STEP = "NEXT_STEP",
  RESET = "RESET",
  JUMP_TO_BRAND = "JUMP_TO_BRAND",
}

export { States, Actions, SelectedKeys, ItemsToFetch };
