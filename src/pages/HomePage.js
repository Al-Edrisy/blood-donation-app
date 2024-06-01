import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DonorList from '../components/DonorList';

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  },
  searchSection: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  select: {
    minWidth: 200,
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [selectedBloodType, setSelectedBloodType] = useState('');
  const [isArabic, setIsArabic] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [fullText, setFullText] = useState('');

  const arabicText = '.تهدف منصة تبرع بالدم إلى تسهيل عملية الوصول إلى المتبرعين الذين يمكنهم إنقاذ الحياة، مما يوفر لك الراحة واليسر في العثور على المساعدة التي تحتاجها';
  const amazighText = 'تبرعك بالدم يمكنه إنقاذ حياة. كن البطل الذي يحتاجه العالم.';

  useEffect(() => {
    const cycleLanguages = setInterval(() => {
      setIsArabic((prevIsArabic) => !prevIsArabic);
      setTypedText('');
      setFullText('');
    }, 10000); // Change language every 10 seconds

    return () => clearInterval(cycleLanguages);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let timerId;
    let mounted = true;

    const textToType = isArabic ? arabicText : amazighText;

    const typingEffect = () => {
      if (currentIndex < textToType.length) {
        if (mounted) {
          setTypedText((prevText) => prevText + textToType[currentIndex]);
        }
        currentIndex++;
        timerId = setTimeout(typingEffect, 30); // Adjust typing speed here (milliseconds)
      } else {
        setFullText(textToType);
        setTimeout(() => {
          if (mounted) {
            setIsArabic((prevIsArabic) => !prevIsArabic);
            setTypedText('');
            setFullText('');
          }
        }, 4000); // Wait 4 seconds after typing finished before starting the next cycle
      }
    };

    typingEffect();

    return () => {
      mounted = false;
      clearTimeout(timerId);
    };
  }, [isArabic]);

  const handleBloodTypeChange = (event) => {
    setSelectedBloodType(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Paper className={classes.root}>
        <Typography variant="h3" className={classes.header}>
          {isArabic ? 'شريان العطاء' : 'ⴰⵔⵓⴼ ⵏ ⵉⵢⴰⵔⵏ'}
        </Typography>
        <Typography variant="h6" align="center" paragraph>
          {fullText || typedText}
        </Typography>
        <Typography variant="subtitle1" align="center" paragraph>
          يرجى اختيار فصيلة الدم للعثور على المتبرعين المتاحين.
        </Typography>
        <Paper className={classes.searchSection}>
          <Typography variant="subtitle1">البحث حسب فصيلة الدم:</Typography>
          <Select
            value={selectedBloodType}
            onChange={handleBloodTypeChange}
            className={classes.select}
          >
            <MenuItem value="">الكل</MenuItem>
            {bloodTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </Paper>
        <div>
          <DonorList searchQuery={selectedBloodType} />
        </div>
      </Paper>
    </Container>
  );
};

export default HomePage;
