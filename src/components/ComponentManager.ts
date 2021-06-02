import Handler from './canvas/handlers/Handler';

class ComponentManager {
    public polygon: any;
    public handler: Handler;
    public points : Array<{x: number, y: number}> = [];
    private static instance: ComponentManager;

    private constructor() { }

    public static getInstance(): ComponentManager {
        if (!ComponentManager.instance) {
            ComponentManager.instance = new ComponentManager();
        }

        return ComponentManager.instance;
    }
}

export default ComponentManager;
