import React from 'react';
declare const _default: {
    title: string;
    component: React.FC<{
        animation: import("../utils").Animation;
        reverse?: boolean | undefined;
        strokeColor?: string | undefined;
        fillColor?: string | undefined;
        pathCss?: string | undefined;
        options?: Partial<import("lottie-web").AnimationConfig> | undefined;
        size?: number | undefined;
        loop?: number | boolean | undefined;
        autoplay?: boolean | undefined;
        speed?: number | undefined;
        wrapperStyle?: React.CSSProperties | undefined;
        render?: ((eventProps: any, animationProps: any) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) | undefined;
    } & React.HTMLProps<HTMLDivElement>>;
    decorators: any[];
};
export default _default;
export declare const RadioButton: {
    (): JSX.Element;
    story: {
        parameters: {
            info: {
                text: string;
            };
        };
    };
};
export declare const ChangingStrokeColor: {
    (): JSX.Element;
    story: {
        parameters: {
            info: {
                text: string;
            };
        };
    };
};
export declare const ChangingFillColor: {
    (): JSX.Element;
    story: {
        parameters: {
            info: {
                text: string;
            };
        };
    };
};
export declare const ChangingPathCss: {
    (): JSX.Element;
    story: {
        parameters: {
            info: {
                text: string;
            };
        };
    };
};
