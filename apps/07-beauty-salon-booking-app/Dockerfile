# Production image for this app (build context = repo root)
FROM node:20-slim AS base
WORKDIR /app
ENV NODE_ENV=production

FROM base AS deps
COPY package.json package-lock.json* ./
COPY packages ./packages
RUN npm ci --omit=dev || npm install --omit=dev

FROM base AS build
COPY . .
RUN npm install
RUN npx prisma generate --schema=apps/THIS_APP/prisma/schema.prisma
RUN npm run build --workspace @app/THIS_APP

FROM base AS run
COPY --from=build /app ./
EXPOSE 3107
CMD ["npm", "run", "start", "--workspace", "@app/THIS_APP"]
