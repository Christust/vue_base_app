class Form {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   */
  constructor(data) {
    this.originalData = data;
    Object.keys(this.originalData).forEach((key) => {
      this[key] = data[key];
    });
  }

  update(data) {
    Object.keys(this.originalData).forEach((key) => {
      this[key] = data[key] !== undefined ? data[key] : null;
    });
  }

  /**
   * Fetch all relevant data for the form.
   */
  data() {
    const data = {};
    Object.keys(this.originalData).forEach((key) => {
      data[key] = this[key];
    });
    return data;
  }

  /**
   * Reset the form fields.
   */
  reset() {
    Object.keys(this.originalData).forEach((key) => {
      if (key === "date_admission") {
        this[key] = new Date();
      } else {
        this[key] = null;
      }
    });
  }
}

export default Form;
