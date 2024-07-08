import React, { useEffect } from "react";
import $ from "jquery";

export default function Test() {
    return (
        <div>
            <div className="has-animation animation-ltr" data-delay="10">
                <p className="bigger">Reveal Animation</p>
            </div>
        </div>
    )
}