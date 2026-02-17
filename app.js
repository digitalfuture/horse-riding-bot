// ============================================
// RACE DATA — Real backtest results
// ============================================

const RACES = [
    { id: 1, date: '2025-01-05', race: 'Novice Hurdle', venue: 'Naas', pick: 'Jasmin De Vaux', beauty: 9, odds: '2/1', position: '4th', runners: 12, winner: 'Final Demand', result: 'LOSS', profit: -10, cumProfit: -10 },
    { id: 2, date: '2025-02-01', race: 'Irish Gold Cup (G1)', venue: 'Leopardstown', pick: 'Galopin Des Champs', beauty: 9, odds: '4/6', position: '1st', runners: 8, winner: 'Galopin Des Champs', result: 'WIN', profit: 6.67, cumProfit: -3.33 },
    { id: 3, date: '2025-02-01', race: 'Dublin RF Novice Hurdle', venue: 'Leopardstown', pick: 'Jasmin De Vaux', beauty: 9, odds: '5/2', position: '4th', runners: 10, winner: 'Final Demand', result: 'LOSS', profit: -10, cumProfit: -13.33 },
    { id: 4, date: '2025-03-13', race: 'Stayers\' Hurdle (G1)', venue: 'Cheltenham', pick: 'Teahupoo', beauty: 8, odds: '11/8', position: '2nd', runners: 12, winner: 'Bob Olinger', result: 'LOSS', profit: -10, cumProfit: -23.33 },
    { id: 5, date: '2025-03-14', race: 'Champion Chase (G1)', venue: 'Cheltenham', pick: 'Marine Nationale', beauty: 7, odds: '5/1', position: '1st', runners: 8, winner: 'Marine Nationale', result: 'WIN', profit: 50, cumProfit: 26.67 },
    { id: 6, date: '2025-03-14', race: 'Gold Cup (G1)', venue: 'Cheltenham', pick: 'Galopin Des Champs', beauty: 9, odds: '4/5', position: '2nd', runners: 9, winner: 'Inothewayurthinkin', result: 'LOSS', profit: -10, cumProfit: 16.67 },
    { id: 7, date: '2025-03-14', race: 'Albert Bartlett (G1)', venue: 'Cheltenham', pick: 'Jasmin De Vaux', beauty: 9, odds: '6/1', position: '1st', runners: 16, winner: 'Jasmin De Vaux', result: 'WIN', profit: 60, cumProfit: 76.67 },
    { id: 8, date: '2025-03-14', race: 'Ryanair Chase (G1)', venue: 'Cheltenham', pick: 'Kitzbuhel', beauty: 8, odds: '6/4', position: '3rd', runners: 10, winner: 'Fact To File', result: 'LOSS', profit: -10, cumProfit: 66.67 },
    { id: 9, date: '2025-04-21', race: 'Irish Grand National', venue: 'Fairyhouse', pick: 'Haiti Couleurs', beauty: 8, odds: '7/1', position: '1st', runners: 24, winner: 'Haiti Couleurs', result: 'WIN', profit: 70, cumProfit: 136.67 },
    { id: 10, date: '2025-04-30', race: 'Punchestown Gold Cup (G1)', venue: 'Punchestown', pick: 'Galopin Des Champs', beauty: 9, odds: '4/7', position: '1st', runners: 6, winner: 'Galopin Des Champs', result: 'WIN', profit: 5.71, cumProfit: 142.39 },
    { id: 11, date: '2025-04-30', race: 'Punchestown Nov. Hurdle', venue: 'Punchestown', pick: 'Jasmin De Vaux', beauty: 9, odds: '13/8', position: '1st', runners: 8, winner: 'Jasmin De Vaux', result: 'WIN', profit: 16.25, cumProfit: 158.64 },
    { id: 12, date: '2025-05-01', race: 'Champion Stayers (G1)', venue: 'Punchestown', pick: 'Teahupoo', beauty: 8, odds: '5/4', position: '1st', runners: 10, winner: 'Teahupoo', result: 'WIN', profit: 12.5, cumProfit: 171.14 },
    { id: 13, date: '2025-05-02', race: 'Champion Hurdle (G1)', venue: 'Punchestown', pick: 'Lossiemouth', beauty: 7, odds: '4/5', position: '3rd', runners: 8, winner: 'Golden Ace', result: 'LOSS', profit: -10, cumProfit: 161.14 },
    { id: 14, date: '2025-05-04', race: '1000 Guineas (G1)', venue: 'Newmarket', pick: 'Desert Flower', beauty: 8, odds: '1/1', position: '1st', runners: 12, winner: 'Desert Flower', result: 'WIN', profit: 10, cumProfit: 171.14 },
    { id: 15, date: '2025-05-15', race: 'Dante Stakes', venue: 'York', pick: 'The Lion In Winter', beauty: 9, odds: '5/2', position: '6th', runners: 11, winner: 'Other', result: 'LOSS', profit: -10, cumProfit: 161.14 },
    { id: 16, date: '2025-06-06', race: 'Epsom Oaks (G1)', venue: 'Epsom', pick: 'Desert Flower', beauty: 8, odds: '3/1', position: '3rd', runners: 9, winner: 'Other', result: 'LOSS', profit: -10, cumProfit: 151.14 },
    { id: 17, date: '2025-06-07', race: 'Epsom Derby (G1)', venue: 'Epsom', pick: 'The Lion In Winter', beauty: 9, odds: '100/30', position: '14th', runners: 18, winner: 'Other', result: 'LOSS', profit: -10, cumProfit: 141.14 },
    { id: 18, date: '2025-06-17', race: 'St James Palace (G1)', venue: 'Royal Ascot', pick: 'Field Of Gold', beauty: 8, odds: '8/11', position: '1st', runners: 10, winner: 'Field Of Gold', result: 'WIN', profit: 7.27, cumProfit: 148.41 },
    { id: 19, date: '2025-07-04', race: 'Gala Stakes', venue: 'Sandown', pick: 'Windlord', beauty: 8, odds: '6/4', position: '1st', runners: 8, winner: 'Windlord', result: 'WIN', profit: 15, cumProfit: 163.41 },
    { id: 20, date: '2025-07-06', race: 'Deauville Mile', venue: 'Deauville', pick: 'The Lion In Winter', beauty: 9, odds: '3/1', position: '3rd', runners: 9, winner: 'Other', result: 'LOSS', profit: -10, cumProfit: 153.41 },
    { id: 21, date: '2025-07-19', race: 'King George VI (G1)', venue: 'Ascot', pick: 'Calandagan', beauty: 8, odds: '2/1', position: '1st', runners: 8, winner: 'Calandagan', result: 'WIN', profit: 20, cumProfit: 173.41 },
    { id: 22, date: '2025-07-31', race: 'Gordon Stakes', venue: 'Goodwood', pick: 'Windlord', beauty: 8, odds: '15/2', position: '3rd', runners: 10, winner: 'Other', result: 'LOSS', profit: -10, cumProfit: 163.41 },
    { id: 23, date: '2025-09-07', race: 'Longchamp Mile', venue: 'Longchamp', pick: 'The Lion In Winter', beauty: 9, odds: '4/1', position: '3rd', runners: 12, winner: 'Other', result: 'LOSS', profit: -10, cumProfit: 153.41 },
    { id: 24, date: '2025-10-18', race: 'Champion Stakes (G1)', venue: 'Ascot', pick: 'Calandagan', beauty: 8, odds: '6/4', position: '1st', runners: 12, winner: 'Calandagan', result: 'WIN', profit: 15, cumProfit: 168.41 },
    { id: 25, date: '2025-10-18', race: 'QEII Stakes (G1)', venue: 'Ascot', pick: 'The Lion In Winter', beauty: 9, odds: '7/1', position: '2nd', runners: 16, winner: 'Other', result: 'LOSS', profit: -10, cumProfit: 158.41 },
    { id: 26, date: '2025-10-18', race: 'Champions F&M (G1)', venue: 'Ascot', pick: 'Kalpana', beauty: 8, odds: '11/8', position: '1st', runners: 12, winner: 'Kalpana', result: 'WIN', profit: 13.75, cumProfit: 172.16 },
    { id: 27, date: '2025-11-01', race: 'Breeders\' Cup Classic', venue: 'Del Mar', pick: 'Forever Young', beauty: 8, odds: '7/2', position: '1st', runners: 13, winner: 'Forever Young', result: 'WIN', profit: 35, cumProfit: 207.16 },
    { id: 28, date: '2025-11-01', race: 'Breeders\' Cup Mile', venue: 'Del Mar', pick: 'The Lion In Winter', beauty: 9, odds: '5/1', position: '3rd', runners: 13, winner: 'Other', result: 'LOSS', profit: -10, cumProfit: 197.16 },
    { id: 29, date: '2025-11-09', race: 'Brown Lad Handicap', venue: 'Naas', pick: 'Spillane\'s Tower', beauty: 6, odds: '6/5', position: '9th', runners: 14, winner: 'Other', result: 'LOSS', profit: -10, cumProfit: 187.16 },
    { id: 30, date: '2025-11-30', race: 'Hattons Grace (G1)', venue: 'Fairyhouse', pick: 'Teahupoo', beauty: 8, odds: '1/1', position: '1st', runners: 8, winner: 'Teahupoo', result: 'WIN', profit: 10, cumProfit: 197.16 },
    { id: 31, date: '2025-12-14', race: 'HKIR Mile', venue: 'Sha Tin', pick: 'The Lion In Winter', beauty: 9, odds: '6/1', position: '12th', runners: 14, winner: 'Other', result: 'LOSS', profit: -10, cumProfit: 187.16 },
    { id: 32, date: '2025-12-26', race: 'Kauto Star Nov. Chase (G1)', venue: 'Kempton', pick: 'Kitzbuhel', beauty: 8, odds: '13/8', position: '1st', runners: 6, winner: 'Kitzbuhel', result: 'WIN', profit: 16.25, cumProfit: 203.41 },
    { id: 33, date: '2025-12-28', race: 'Christmas Hurdle (G1)', venue: 'Leopardstown', pick: 'Teahupoo', beauty: 8, odds: '5/2', position: '1st', runners: 8, winner: 'Teahupoo', result: 'WIN', profit: 25, cumProfit: 228.41 },
    { id: 34, date: '2025-12-29', race: 'December Hurdle (G1)', venue: 'Leopardstown', pick: 'Lossiemouth', beauty: 7, odds: '4/6', position: '1st', runners: 8, winner: 'Lossiemouth', result: 'WIN', profit: 6.67, cumProfit: 235.08 },
    { id: 35, date: '2026-02-02', race: 'Irish Gold Cup (G1)', venue: 'Leopardstown', pick: 'Galopin Des Champs', beauty: 9, odds: '5/1', position: '3rd', runners: 12, winner: 'Other', result: 'LOSS', profit: -10, cumProfit: 225.08 },
];

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    renderKPIs();
    renderChart('cumulative');
    renderBeautyBars();
    renderLeaderboard();
    renderTable('all');
    setupEventListeners();
});

// ============================================
// KPI CARDS
// ============================================

function renderKPIs() {
    const wins = RACES.filter(r => r.result === 'WIN').length;
    const losses = RACES.filter(r => r.result === 'LOSS').length;
    const totalStaked = RACES.length * 10;
    const totalProfit = RACES.reduce((s, r) => s + r.profit, 0);
    const roi = ((totalProfit / totalStaked) * 100).toFixed(1);
    const winRate = ((wins / RACES.length) * 100).toFixed(1);

    // Best beauty score performance
    const byBeauty = {};
    RACES.forEach(r => {
        if (!byBeauty[r.beauty]) byBeauty[r.beauty] = { wins: 0, total: 0 };
        byBeauty[r.beauty].total++;
        if (r.result === 'WIN') byBeauty[r.beauty].wins++;
    });
    let bestScore = 0, bestWR = 0;
    Object.entries(byBeauty).forEach(([score, data]) => {
        const wr = data.wins / data.total;
        if (wr > bestWR && data.total >= 2) { bestWR = wr; bestScore = score; }
    });

    // Max win streak
    let maxStreak = 0, currentStreak = 0;
    RACES.forEach(r => {
        if (r.result === 'WIN') { currentStreak++; maxStreak = Math.max(maxStreak, currentStreak); }
        else { currentStreak = 0; }
    });

    animateValue('kpi-profit-value', `+£${totalProfit.toFixed(2)}`);
    animateValue('kpi-roi-value', `${roi}%`);
    animateValue('kpi-winrate-value', `${winRate}%`);
    animateValue('kpi-staked-value', `£${totalStaked}`);
    animateValue('kpi-best-value', `Score ${bestScore}`);
    animateValue('kpi-streak-value', `${maxStreak} in a row`);
}

function animateValue(id, finalText) {
    const el = document.getElementById(id);
    setTimeout(() => {
        el.textContent = finalText;
        el.classList.add('animated');
    }, 300);
}

// ============================================
// CHART
// ============================================

let chartInstance = null;

function renderChart(type) {
    const ctx = document.getElementById('profitChart').getContext('2d');

    if (chartInstance) chartInstance.destroy();

    const labels = RACES.map(r => `#${r.id}`);
    const data = type === 'cumulative'
        ? RACES.map(r => parseFloat(r.cumProfit.toFixed(2)))
        : RACES.map(r => parseFloat(r.profit.toFixed(2)));

    const isPerBet = type === 'perbet';

    // Gradient fill
    const gradientGreen = ctx.createLinearGradient(0, 0, 0, 380);
    gradientGreen.addColorStop(0, 'rgba(16, 185, 129, 0.3)');
    gradientGreen.addColorStop(1, 'rgba(16, 185, 129, 0.01)');

    const gradientRed = ctx.createLinearGradient(0, 0, 0, 380);
    gradientRed.addColorStop(0, 'rgba(239, 68, 68, 0.01)');
    gradientRed.addColorStop(1, 'rgba(239, 68, 68, 0.3)');

    if (isPerBet) {
        // Bar chart for per-bet view
        const colors = data.map(v => v >= 0 ? 'rgba(16, 185, 129, 0.7)' : 'rgba(239, 68, 68, 0.6)');
        const borderColors = data.map(v => v >= 0 ? '#10b981' : '#ef4444');

        chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [{
                    label: 'P&L per bet (£)',
                    data,
                    backgroundColor: colors,
                    borderColor: borderColors,
                    borderWidth: 1,
                    borderRadius: 4,
                }]
            },
            options: getChartOptions(isPerBet)
        });
    } else {
        // Line chart for cumulative view
        chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels,
                datasets: [{
                    label: 'Cumulative Profit (£)',
                    data,
                    borderColor: '#10b981',
                    borderWidth: 2.5,
                    pointBackgroundColor: data.map((v, i) =>
                        RACES[i].result === 'WIN' ? '#10b981' : '#ef4444'
                    ),
                    pointBorderColor: data.map((v, i) =>
                        RACES[i].result === 'WIN' ? '#10b981' : '#ef4444'
                    ),
                    pointRadius: 4,
                    pointHoverRadius: 7,
                    fill: true,
                    backgroundColor: gradientGreen,
                    tension: 0.3,
                }]
            },
            options: getChartOptions(isPerBet)
        });
    }
}

function getChartOptions(isPerBet) {
    return {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { intersect: false, mode: 'index' },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(26, 34, 54, 0.95)',
                titleColor: '#f1f5f9',
                bodyColor: '#94a3b8',
                borderColor: 'rgba(59, 130, 246, 0.3)',
                borderWidth: 1,
                padding: 12,
                cornerRadius: 8,
                titleFont: { family: 'Inter', weight: '600' },
                bodyFont: { family: 'JetBrains Mono' },
                callbacks: {
                    title(items) {
                        const race = RACES[items[0].dataIndex];
                        return `${race.race} — ${race.venue}`;
                    },
                    afterTitle(items) {
                        const race = RACES[items[0].dataIndex];
                        return `${race.date} | ${race.pick} (💎${race.beauty})`;
                    },
                    label(item) {
                        const val = item.parsed.y;
                        const prefix = val >= 0 ? '+' : '';
                        return ` ${isPerBet ? 'P&L' : 'Balance'}: ${prefix}£${val.toFixed(2)}`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: { color: 'rgba(148, 163, 184, 0.06)' },
                ticks: { color: '#64748b', font: { size: 10, family: 'JetBrains Mono' } }
            },
            y: {
                grid: { color: 'rgba(148, 163, 184, 0.06)' },
                ticks: {
                    color: '#64748b',
                    font: { size: 11, family: 'JetBrains Mono' },
                    callback: v => `£${v}`
                }
            }
        }
    };
}

// ============================================
// BEAUTY SCORE BARS
// ============================================

function renderBeautyBars() {
    const container = document.getElementById('beauty-bars');
    const byBeauty = {};

    RACES.forEach(r => {
        if (!byBeauty[r.beauty]) byBeauty[r.beauty] = { wins: 0, total: 0, profit: 0 };
        byBeauty[r.beauty].total++;
        byBeauty[r.beauty].profit += r.profit;
        if (r.result === 'WIN') byBeauty[r.beauty].wins++;
    });

    const scores = Object.keys(byBeauty).sort((a, b) => b - a);
    const maxTotal = Math.max(...scores.map(s => byBeauty[s].total));

    const colors = {
        9: 'linear-gradient(90deg, #ec4899, #db2777)',
        8: 'linear-gradient(90deg, #10b981, #059669)',
        7: 'linear-gradient(90deg, #3b82f6, #2563eb)',
        6: 'linear-gradient(90deg, #f59e0b, #d97706)',
        2: 'linear-gradient(90deg, #64748b, #475569)',
    };

    container.innerHTML = scores.map(score => {
        const d = byBeauty[score];
        const winRate = ((d.wins / d.total) * 100).toFixed(0);
        const barWidth = (d.total / maxTotal) * 100;
        const profitStr = d.profit >= 0 ? `+£${d.profit.toFixed(0)}` : `-£${Math.abs(d.profit).toFixed(0)}`;
        const profitClass = d.profit >= 0 ? 'pnl-cell--positive' : 'pnl-cell--negative';

        return `
            <div class="beauty-bar-item">
                <div class="beauty-bar-label">Score ${score}</div>
                <div class="beauty-bar-track">
                    <div class="beauty-bar-fill" style="width: ${barWidth}%; background: ${colors[score] || colors[6]}">
                        ${d.wins}W / ${d.total - d.wins}L
                    </div>
                </div>
                <div class="beauty-bar-stats">
                    <div class="beauty-bar-winrate ${profitClass}">${winRate}% win</div>
                    <div class="beauty-bar-detail ${profitClass}">${profitStr}</div>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================
// HORSE LEADERBOARD
// ============================================

function renderLeaderboard() {
    const container = document.getElementById('horse-leaderboard');
    const byHorse = {};

    RACES.forEach(r => {
        if (!byHorse[r.pick]) byHorse[r.pick] = { beauty: r.beauty, wins: 0, total: 0, profit: 0 };
        byHorse[r.pick].total++;
        byHorse[r.pick].profit += r.profit;
        if (r.result === 'WIN') byHorse[r.pick].wins++;
    });

    const sorted = Object.entries(byHorse).sort((a, b) => b[1].profit - a[1].profit);

    container.innerHTML = sorted.map(([name, d], i) => {
        const rankClass = i < 3 ? `horse-rank--${i + 1}` : 'horse-rank--other';
        const pnlClass = d.profit >= 0 ? 'horse-pnl--positive' : 'horse-pnl--negative';
        const profitStr = d.profit >= 0 ? `+£${d.profit.toFixed(0)}` : `-£${Math.abs(d.profit).toFixed(0)}`;
        const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}`;

        return `
            <div class="horse-item">
                <div class="horse-rank ${rankClass}">${medal}</div>
                <div class="horse-name">${name}</div>
                <div class="horse-beauty">💎 ${d.beauty}</div>
                <div class="horse-record">${d.wins}/${d.total}</div>
                <div class="horse-pnl ${pnlClass}">${profitStr}</div>
            </div>
        `;
    }).join('');
}

// ============================================
// RACE TABLE
// ============================================

function renderTable(filter) {
    const tbody = document.getElementById('race-tbody');

    tbody.innerHTML = RACES.map(r => {
        const isWin = r.result === 'WIN';
        const hidden = (filter === 'win' && !isWin) || (filter === 'loss' && isWin);
        const profitStr = r.profit >= 0 ? `+£${r.profit.toFixed(2)}` : `-£${Math.abs(r.profit).toFixed(2)}`;
        const balanceStr = r.cumProfit >= 0 ? `+£${r.cumProfit.toFixed(2)}` : `-£${Math.abs(r.cumProfit).toFixed(2)}`;
        const stars = renderStars(r.beauty);

        return `
            <tr class="${hidden ? 'row-hidden' : ''}" data-result="${r.result.toLowerCase()}">
                <td>${r.id}</td>
                <td>${formatDate(r.date)}</td>
                <td title="${r.venue}">${r.race}</td>
                <td class="horse-name-cell">${r.pick}</td>
                <td><span class="beauty-stars">${stars}</span></td>
                <td class="odds-cell">${r.odds}</td>
                <td>${r.position}</td>
                <td>
                    <span class="result-badge ${isWin ? 'result-badge--win' : 'result-badge--loss'}">
                        ${isWin ? '✅ WIN' : '❌ LOSS'}
                    </span>
                </td>
                <td class="pnl-cell ${r.profit >= 0 ? 'pnl-cell--positive' : 'pnl-cell--negative'}">${profitStr}</td>
                <td class="balance-cell ${r.cumProfit >= 0 ? 'pnl-cell--positive' : 'pnl-cell--negative'}">${balanceStr}</td>
            </tr>
        `;
    }).join('');
}

function renderStars(beauty) {
    let html = '';
    for (let i = 1; i <= 10; i++) {
        html += `<span class="star ${i <= beauty ? '' : 'star--empty'}">★</span>`;
    }
    return html;
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear().toString().slice(2)}`;
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Chart toggle
    document.getElementById('btn-cumulative').addEventListener('click', function () {
        setActiveBtn(this, '.chart-controls');
        renderChart('cumulative');
    });

    document.getElementById('btn-perbet').addEventListener('click', function () {
        setActiveBtn(this, '.chart-controls');
        renderChart('perbet');
    });

    // Table filters
    document.getElementById('filter-all').addEventListener('click', function () {
        setActiveBtn(this, '.table-filters');
        renderTable('all');
    });

    document.getElementById('filter-win').addEventListener('click', function () {
        setActiveBtn(this, '.table-filters');
        renderTable('win');
    });

    document.getElementById('filter-loss').addEventListener('click', function () {
        setActiveBtn(this, '.table-filters');
        renderTable('loss');
    });
}

function setActiveBtn(btn, containerSelector) {
    const container = btn.closest(containerSelector);
    container.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}
