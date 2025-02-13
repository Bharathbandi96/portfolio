import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BACKEND_URL: 'https://backend-two-zeta-63.vercel.app',
    NEXT_PUBLIC_LINKEDIN_URL: 'https://www.linkedin.com/in/bharath-bandi-ramakrishna/',
    NEXT_PUBLIC_GITHUB_URL: 'https://github.com/Bharathbandi96',
    NEXT_PUBLIC_INSTAGRAM_URL: 'https://www.instagram.com/bharath_bandi',
    NEXT_PUBLIC_FACEBOOK_URL: 'https://www.facebook.com/profile.php?id=100008657705780',
    NEXT_PUBLIC_CV_PREVIEW_URL: 'https://drive.google.com/file/d/1vRrNcQG2cb6lJjfgNli2eNT9MZF98SXh/view?usp=drive_link',
    NEXT_PUBLIC_CV_DOWNLOAD_URL: 'https://drive.google.com/uc?export=download&id=1vRrNcQG2cb6lJjfgNli2eNT9MZF98SXh',
  },
};

export default nextConfig;
