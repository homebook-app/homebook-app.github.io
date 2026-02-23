<template>
  <div class="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
    <div class="space-y-4">
      <div class="setup-step">
        <div class="setup-step-index">
          1
        </div>
        <div>
          <p class="font-medium">
            Open CasaOS app manager
          </p>
          <p class="text-muted text-sm mt-1">
            Go to the App Store or custom app section in CasaOS.
          </p>
        </div>
      </div>

      <div class="setup-step">
        <div class="setup-step-index">
          2
        </div>
        <div>
          <p class="font-medium">
            Configure Homebook
          </p>
          <p class="text-muted text-sm mt-1">
            Set image, ports and a persistent volume for app data.
          </p>
        </div>
      </div>

      <div class="setup-step">
        <div class="setup-step-index">
          3
        </div>
        <div>
          <p class="font-medium">
            Deploy container
          </p>
          <p class="text-muted text-sm mt-1">
            Save and start the container from the CasaOS UI.
          </p>
        </div>
      </div>

      <div class="setup-step">
        <div class="setup-step-index">
          4
        </div>
        <div>
          <p class="font-medium">
            Verify service
          </p>
          <p class="text-muted text-sm mt-1">
            Check logs and open the Homebook URL to confirm onboarding works.
          </p>
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <UCard variant="subtle">
        <p class="text-xs font-semibold uppercase tracking-wide text-primary">
          CasaOS Compose Example
        </p>
        <pre class="setup-code mt-3"><code>services:
  homebook:
    image: ghcr.io/your-org/homebook:latest
    ports:
      - "3000:3000"
    volumes:
      - homebook_data:/app/data</code></pre>
      </UCard>

      <UCard variant="subtle">
        <p class="text-xs font-semibold uppercase tracking-wide text-primary">
          Post Install Checks
        </p>
        <pre class="setup-code mt-3"><code># Check running status in CasaOS
# Inspect logs for startup errors
# Open Homebook and validate core pages</code></pre>
      </UCard>
    </div>
  </div>
</template>
