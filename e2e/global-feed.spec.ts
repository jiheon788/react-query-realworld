import { test, expect } from '@playwright/test';

/**
 * Escenario 1 (TEST-STRATEGY.MD) — Global feed
 * Un usuario NO logueado ingresa al home y ve la lista general de articulos.
 */
test.describe('Escenario 1 - Global feed (usuario no logueado)', () => {
  test('el home muestra el global feed con la lista de articulos', async ({ page }) => {
    await page.goto('/');

    // Banner de la home
    await expect(page.locator('.banner')).toContainText('conduit');

    // El tab "Global Feed" esta presente y activo
    const globalFeedTab = page.getByRole('link', { name: 'Global Feed' });
    await expect(globalFeedTab).toBeVisible();
    await expect(globalFeedTab).toHaveClass(/active/);

    // Sin login no debe existir el tab "Your Feed"
    await expect(page.getByRole('link', { name: 'Your Feed' })).toHaveCount(0);

    // Se renderiza la lista de articulos (al menos uno) y cada uno tiene titulo
    const articles = page.locator('.article-preview');
    await expect(articles.first()).toBeVisible();
    expect(await articles.count()).toBeGreaterThan(0);
    await expect(articles.first().locator('h1')).not.toBeEmpty();
  });
});
