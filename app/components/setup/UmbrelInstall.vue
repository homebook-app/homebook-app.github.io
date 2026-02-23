<template>
  <div class="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
    <div class="space-y-4">
      <div class="setup-step">
        <div class="setup-step-index">
          1
        </div>
        <div>
          <p class="font-medium">
            Open Umbrel App Store
          </p>
          <p class="text-muted text-sm mt-1">
            Navigate to your Umbrel dashboard and open the app management area.
          </p>
        </div>
      </div>

      <div class="setup-step">
        <div class="setup-step-index">
          2
        </div>
        <div>
          <p class="font-medium">
            Add Homebook app
          </p>
          <p class="text-muted text-sm mt-1">
            Install Homebook from your app source and keep persistent storage enabled.
          </p>
        </div>
      </div>

      <div class="setup-step">
        <div class="setup-step-index">
          3
        </div>
        <div>
          <p class="font-medium">
            Start service
          </p>
          <p class="text-muted text-sm mt-1">
            Launch the app and wait until the status changes to healthy.
          </p>
        </div>
      </div>

      <div class="setup-step">
        <div class="setup-step-index">
          4
        </div>
        <div>
          <p class="font-medium">
            Verify in browser
          </p>
          <p class="text-muted text-sm mt-1">
            Open your Homebook URL from Umbrel and finish the first-time setup.
          </p>
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <UCard variant="subtle">
        <p class="text-xs font-semibold uppercase tracking-wide text-primary">
          Umbrel Notes
        </p>
        <pre class="setup-code mt-3"><code># Umbrel dashboard
# Apps -> Homebook -> Install
# Enable persistence and restart policy</code></pre>
      </UCard>

      <UCard variant="subtle">
        <p class="text-xs font-semibold uppercase tracking-wide text-primary">
          Post Install Checks
        </p>
        <pre class="setup-code mt-3"><code># Validate app health in Umbrel
# Open app URL
# Confirm features/docs routes load correctly</code></pre>
      </UCard>
    </div>
  </div>
</template>
