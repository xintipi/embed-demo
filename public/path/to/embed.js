(function (global) {
    class NGPRoiCalc {
        constructor(options) {
            this.apiKey = options?.key || null; // Lấy apiKey nếu có, nếu không sẽ là null
            this.containerId = "roicalc-container";
            this.init();
        }

        init() {
            this.container = this.getOrCreateContainer();

            if (!this.apiKey) {
                this.renderError("API key is missing. Please provide a valid API key.");
                return;
            }

            this.loadDependencies()
                .then(() => this.renderRoiCalculator())
                .catch((error) =>
                    console.error("[NGPRoiCalc] Initialization failed:", error)
                );
        }

        getOrCreateContainer() {
            let container = document.getElementById(this.containerId);
            if (!container) {
                container = document.createElement("div");
                container.id = this.containerId;
                document.body.appendChild(container);
            }
            return container;
        }

        loadScript(src) {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = src;
                script.onload = resolve;
                script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
                document.body.appendChild(script);
            });
        }

        async loadDependencies() {
            if (!global.React || !global.ReactDOM) {
                console.info("[NGPRoiCalc] Loading dependencies...");
                await this.loadScript("https://cdn.tailwindcss.com");
                await this.loadScript("https://unpkg.com/react@18/umd/react.production.min.js");
                await this.loadScript("https://unpkg.com/react-dom@18/umd/react-dom.production.min.js");
                console.info("[NGPRoiCalc] Dependencies loaded.");
            }
        }

        renderError(message) {
            console.error(`[NGPRoiCalc] React or ReactDOM is not loaded. ${message}`);
        }

        async renderRoiCalculator() {
            try {
                const { default: RoiCalculator } = await import(window.location.href + "js/RoiCalculator.js");
                const React = global.React;
                const ReactDOM = global.ReactDOM;

                const root = ReactDOM.createRoot(this.container);
                root.render(
                    React.createElement(RoiCalculator, { key: this.apiKey })
                );
                console.info("[NGPRoiCalc] ROI Calculator rendered successfully.");
            } catch (error) {
                this.renderError("Failed to load ROI Calculator. Please try again later.");
                console.error("[NGPRoiCalc] Failed to render ROI Calculator:", error);
            }
        }
    }

    global.NGPRoiCalc = (options) => new NGPRoiCalc(options);
})(window);
