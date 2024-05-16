import { test, expect } from '@playwright/test';

const data = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannisters', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
];

test.describe('Home Page', () => {
  test('Has title', async ({ page }) => {
    await page.goto('/');

    expect(page.getByRole('heading', { name: 'Hello World!' })).toBeDefined();
  });

  test('Has table with data', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.getByText(data[0].lastName || '', { exact: true })
    ).toBeVisible();
    await expect(
      page.getByText(data[1].lastName || '', { exact: true })
    ).toBeVisible();
    await expect(
      page.getByText(data[2].lastName || '', { exact: true })
    ).toBeVisible();
    await expect(
      page.getByText(data[3].lastName || '', { exact: true })
    ).toBeVisible();
    await expect(
      page.getByText(data[4].lastName || '', { exact: true })
    ).toBeVisible();
  });
});
