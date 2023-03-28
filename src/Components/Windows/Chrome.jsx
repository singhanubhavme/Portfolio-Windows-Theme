import { Fragment } from "react";
const Chrome = () => {
    return (
        <Fragment>
            <iframe id="inlineFrameExample"
                title="Inline Frame Example"
                width="800"
                height="1200"
                src="https://www.google.com/search?igu=1">
            </iframe>
        </Fragment>
    );
}

export default Chrome;