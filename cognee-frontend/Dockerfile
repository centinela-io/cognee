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

ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
