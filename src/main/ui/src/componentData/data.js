// @ts-check

/**
 * @typedef {{ error?: boolean, refresh: (value: boolean) => void, data?: string }} DataEntry
 */

export class Data {
  /**
   * @type {{ [Key: string]: DataEntry }}
   */
  components = {};
  /**
   *
   * @param {string} text
   * @param {DataEntry} props
   */
  set(text, props) {
    const news = Object.entries(props).reduce(
      (total, [key, value]) => (value !== undefined ? { ...total, [key]: value } : total),
      {}
    );
    this.components[text] = { ...(this.components[text] ?? {}), ...news };
  }
  /**
   * @param {string} name
   */
  get(name) {
    return this.components[name];
  }
  /**
   * @param {string} name
   */
  getError(name) {
    return this.components[name]?.error ?? false;
  }
  /**
   * @param {string} name
   */
  getData(name) {
    return this.components[name]?.data ?? undefined;
  }
  valueArray() {
    return Object.values(this.components);
  }
  keyValueArray() {
    return Object.entries(this.components);
  }
  isErrorAvailable() {
    return this.valueArray().some(({ error }) => error);
  }
  refresh() {
    this.valueArray().forEach(({ error, refresh }) => refresh(error ?? false));
  }

  /**
   * @param {import("./rows").Rows} rows
   */
  getJSON(rows) {
    return this.keyValueArray()
      .map(([name, entry]) => [name, entry.data])
      .reduce((total, [name, entry]) => {
        const found = rows
          .find((row) => row.find((inner) => inner.text === name))
          ?.find((inner) => inner.text === name);

        if (!found) return total;

        return { ...total, [found.dbColumn]: entry };
      }, {});
  }
}
