<template>
  <div class="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
    <div class="space-y-4">
      <div class="setup-step">
        <div class="setup-step-index">
          1
        </div>
        <div>
          <p class="font-medium">
            run docker
          </p>
          <p class="text-muted text-sm mt-1">
            Install and start the container using docker compose or docker run with a named volume mounted to /var/lib/homebook.
          </p>
        </div>
      </div>

      <div class="setup-step">
        <div class="setup-step-index">
          2
        </div>
        <div>
          <p class="font-medium">
            map ports
          </p>
          <p class="text-muted text-sm mt-1">
            homebook listens on port <b>8080</b> internally, make sure to map it to a port on your host to access the app (e.g. <code>6500:8080</code>).
          </p>
        </div>
      </div>

      <div class="setup-step">
        <div class="setup-step-index">
          3
        </div>
        <div>
          <p class="font-medium">
            open homebook
          </p>
          <p class="text-muted text-sm mt-1">
            run http://localhost:6500 in your browser
          </p>
        </div>
      </div>

      <div class="setup-step">
        <div class="setup-step-index">
          4
        </div>
        <div>
          <p class="font-medium">
            setup homebook
          </p>
          <p class="text-muted text-sm mt-1">
            proceed with the homebook setup (<a class="text-sm gap-1.5 text-primary hover:bg-primary/10 active:bg-primary/10 focus:outline-none focus-visible:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent" href="/docs/getting-started/setup">follow the getting started setup</a>).
          </p>
        </div>
      </div>

      <div class="setup-step">
        <div class="setup-step-index">
          5
        </div>
        <div>
          <p class="font-medium">
            bind with nginx
          </p>
          <p class="text-muted text-sm mt-1">
            have a look on the <a class="text-sm gap-1.5 text-primary hover:bg-primary/10 active:bg-primary/10 focus:outline-none focus-visible:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent" href="/docs/getting-started/nginx">nginx setup</a>.
          </p>
        </div>
      </div>

    </div>

    <div class="space-y-4">
      <UCard variant="subtle">
        <p class="text-xs font-semibold uppercase tracking-wide text-primary">
          Docker Compose
        </p>
        <pre class="setup-code mt-3"><code>services:
  homebook:
    image: homebookapp/app:latest
    container_name: homebook
    restart: always
    ports:
      - "6500:8080"
    volumes:
      - homebook_data:/var/lib/homebook

volumes:
  homebook_data:</code></pre>
      </UCard>

      <UCard variant="subtle">
        <p class="text-xs font-semibold uppercase tracking-wide text-primary">
          Docker Run
        </p>
        <pre class="setup-code mt-3"><code>docker run -d \
  --name homebook \
  --restart always \
  -p 6500:8080 \
  -v homebook_data:/var/lib/homebook \
  homebookapp/app:latest</code></pre>
      </UCard>
    </div>
  </div>
</template>
