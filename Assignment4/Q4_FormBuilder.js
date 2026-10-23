// Q4: Custom Form Builder (Forms + Classes)
class FormBuilder {
    constructor(fields, hostElement, outputElement) {
        this.fields = fields;
        this.hostElement = hostElement;
        this.outputElement = outputElement;
    }

    buildForm() {
        const fieldsHTML = this.fields.map((field, index) => {
            const id = `dynamicField${index}`;
            const safeLabel = this.escapeHTML(field.label);
            const type = ["text", "email", "number", "password", "date", "tel"].includes(field.type)
                ? field.type : "text";

            if (field.type === "textarea") {
                return `<label for="${id}">${safeLabel}</label><textarea id="${id}" name="${this.escapeHTML(field.name)}" ${field.required ? "required" : ""}></textarea>`;
            }

            if (field.type === "select") {
                const options = (field.options || []).map(option =>
                    `<option value="${this.escapeHTML(option)}">${this.escapeHTML(option)}</option>`
                ).join("");
                return `<label for="${id}">${safeLabel}</label><select id="${id}" name="${this.escapeHTML(field.name)}" ${field.required ? "required" : ""}>${options}</select>`;
            }

            return `<label for="${id}">${safeLabel}</label><input id="${id}" name="${this.escapeHTML(field.name)}" type="${type}" ${field.required ? "required" : ""}>`;
        }).join("");

        this.hostElement.innerHTML = `
            <form id="generatedForm">
                ${fieldsHTML}
                <button type="submit">Submit</button>
            </form>`;

        document.getElementById("generatedForm").addEventListener("submit", event => {
            event.preventDefault();
            this.outputElement.textContent = JSON.stringify(this.getFormData(), null, 2);
        });
    }

    getFormData() {
        const form = document.getElementById("generatedForm");
        const data = {};
        this.fields.forEach(field => {
            const control = form.elements.namedItem(field.name);
            if (control) data[field.name] = control.value;
        });
        return data;
    }

    // Escape user-provided strings before inserting them into HTML.
    escapeHTML(value = "") {
        return String(value).replace(/[&<>"']/g, character => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        })[character]);
    }
}

const fields = [
    { type: "text", name: "username", label: "Username", required: true },
    { type: "email", name: "email", label: "Email Address", required: true },
    { type: "select", name: "course", label: "Course", options: ["JavaScript", "Java", "Python"], required: true },
    { type: "textarea", name: "about", label: "About You", required: false }
];

const formBuilder = new FormBuilder(
    fields,
    document.getElementById("formHost"),
    document.getElementById("formOutput")
);
formBuilder.buildForm();
