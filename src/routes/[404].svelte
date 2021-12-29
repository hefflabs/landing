<script>
import Button from "../components/button.svelte";
import Page from "../components/page.svelte";
</script>

<Page title="404 | Heff Labs">
    <h1 slot="title">404</h1>
    <h2 class="mb-3">Page not found</h2>
    <p class="mb-4">Eventually I might put something cool here. But for now, this is all you get.</p>

    <a href="/" slot="bottom-start">
        <Button>Back to main</Button>
    </a>
</Page>