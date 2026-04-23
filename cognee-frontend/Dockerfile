FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./

# Use --no-audit to speed up; lockfile is out of sync upstream so use install, not ci
RUN npm install --no-audit --no-fund && npm rebuild lightningcss

COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY postcss.config.mjs .
COPY tsconfig.json .

# NEXT_PUBLIC_* vars are baked at build time. Railway only injects them into the
# build if we declare ARG + ENV here.
ARG NEXT_PUBLIC_LOCAL_API_URL
ARG NEXT_PUBLIC_IS_CLOUD_ENVIRONMENT
ARG NEXT_PUBLIC_COGWIT_API_KEY
ARG BACKEND_ORIGIN
ENV NEXT_PUBLIC_LOCAL_API_URL=$NEXT_PUBLIC_LOCAL_API_URL
ENV NEXT_PUBLIC_IS_CLOUD_ENVIRONMENT=$NEXT_PUBLIC_IS_CLOUD_ENVIRONMENT
ENV NEXT_PUBLIC_COGWIT_API_KEY=$NEXT_PUBLIC_COGWIT_API_KEY
ENV BACKEND_ORIGIN=$BACKEND_ORIGIN

ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
