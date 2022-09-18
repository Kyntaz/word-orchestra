type Subscriber<T> = (value: T) => void;

export type IParameter<T> = {
    getValue: () => T;
    setValue: (value: T) => void;
    subscribe: (subscriber: Subscriber<T>) => void;
};

export const Parameter = class<T> implements IParameter<T> {
    #value: T;
    #subscribers: Subscriber<T>[] = [];

    constructor (value: T) {
        this.#value = value;
    }

    getValue = () => this.#value;

    setValue = (value: T) => {
        this.#value = value;
        for (const subscriber of this.#subscribers) {
            subscriber(this.#value);
        }
    }

    subscribe = (subscriber: Subscriber<T>) => this.#subscribers.push(subscriber);
}
