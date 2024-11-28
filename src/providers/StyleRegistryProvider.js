'use client'

import { useServerInsertedHTML } from 'next/navigation'

export default function StyleRegistryProvider({ children }) {
    useServerInsertedHTML(() => {
        const scriptEmbedPath = './path/to/embed.js';
        const scriptInitCode = `
            document.addEventListener('DOMContentLoaded', () => {
                NGPRoiCalc({
                    key: 'fd88c711-7acd-4b49-8ec1-c9d96ffb3d52'
                });
            });
        `;

        return (
            <>
                <script src={scriptEmbedPath} />
                <script dangerouslySetInnerHTML={{__html: scriptInitCode }} />
            </>
        );
    });

    return <>{children}</>;
}
