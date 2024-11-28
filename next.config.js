/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/js/:path*", // Áp dụng cho tất cả file trong /js/
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET, OPTIONS" },
                ],
            },
        ];
    },
}

module.exports = nextConfig
