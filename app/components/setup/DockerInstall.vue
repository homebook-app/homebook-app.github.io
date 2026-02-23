<template>
  <div class="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
    <div class="space-y-4">
      <div class="setup-step">
        <div class="setup-step-index">
          1
        </div>
        <div>
          <p class="font-medium">
            Pull image
          </p>
          <p class="text-muted text-sm mt-1">
            Pull the latest Homebook image from your container registry.
          </p>
        </div>
      </div>

      <div class="setup-step">
        <div class="setup-step-index">
          2
        </div>
        <div>
          <p class="font-medium">
            Run container
          </p>
          <p class="text-muted text-sm mt-1">
            Start Homebook with mapped port and persistent volume.
          </p>
        </div>
      </div>

      <div class="setup-step">
        <div class="setup-step-index">
          3
        </div>
        <div>
          <p class="font-medium">
            Validate process
          </p>
          <p class="text-muted text-sm mt-1">
            Confirm that the container is up and healthy.
          </p>
        </div>
      </div>

      <div class="setup-step">
        <div class="setup-step-index">
          4
        </div>
        <div>
          <p class="font-medium">
            Open Homebook
          </p>
          <p class="text-muted text-sm mt-1">
            Open <code>http://localhost:3000</code> and finish initial configuration.
          </p>
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <UCard variant="subtle">
        <p class="text-xs font-semibold uppercase tracking-wide text-primary">
          Docker Run
        </p>
        <pre class="setup-code mt-3"><code>docker pull ghcr.io/your-org/homebook:latest

docker run -d \\
  --name homebook \\
  -p 3000:3000 \\
  -v homebook_data:/app/data \\
  ghcr.io/your-org/homebook:latest</code></pre>
      </UCard>

      <UCard variant="subtle">
        <p class="text-xs font-semibold uppercase tracking-wide text-primary">
          Post Install Checks
        </p>
        <pre class="setup-code mt-3"><code>docker ps
docker logs homebook
curl -I http://localhost:3000</code></pre>
      </UCard>
    </div>
  </div>
</template>
