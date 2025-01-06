import { FC } from "react";
import classNames from "classnames";

import './ButtonLink.styles.scss';
import './PersonalizeButtonStyle.scss';

export interface ButtonLinkProps {
    href: string;
    label?: string | null;
    className?: string;
    iconAfter?: () => React.ReactElement;
}

const ButtonLink: FC<ButtonLinkProps>
    = ({ href, label, className, iconAfter }) => {
    const classes = classNames('button-link', className);

    return <a className={classes} href={href}>
            { // if (condicion) { se ejecuta } // FALSY - THRUTLY
                // FALSY -> undefined, cadena vacía, Null, 0, false
                // THRUTLY -> Cadena con algún valor
                label && // Pregunta si label es verdadero
                <div className="initialContainer">
                    <div className="containerButton">
                        <div className="btn from-top"> {/* Usa la animación que prefieras */}
                        {label}
                        </div>
                    </div>
                </div>
            }
        </a>;
}

export default ButtonLink;
