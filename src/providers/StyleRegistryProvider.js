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
                <script defer src={scriptEmbedPath} crossOrigin="anonymous" />
                <script async dangerouslySetInnerHTML={{__html: scriptInitCode }} crossOrigin="anonymous" />
            </>
        );
    });

    return <>{children}</>;
}
